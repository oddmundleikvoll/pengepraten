#!/usr/bin/env python3
"""
Compose TikTok slideshow video for 52-ukers Spareutfordringen.
Uses Whisper timestamps to determine slide durations.
"""
import subprocess
import os
import json

# Slide timings from Whisper analysis
SLIDES = [
    {"num": 1, "file": "slide-01-hook.png",     "start": 0.00,  "end": 10.26},
    {"num": 2, "file": "slide-02-intro.png",     "start": 11.26, "end": 33.26},
    {"num": 3, "file": "slide-03-math.png",      "start": 34.12, "end": 49.62},
    {"num": 4, "file": "slide-04-milestones-1.png", "start": 50.74, "end": 64.88},
    {"num": 5, "file": "slide-05-halvveis.png",   "start": 65.80, "end": 76.36},
    {"num": 6, "file": "slide-06-tool.png",      "start": 81.86, "end": 97.08},
    {"num": 7, "file": "slide-07-push.png",      "start": 98.24, "end": 113.86},
    {"num": 8, "file": "slide-08-cta.png",       "start": 114.98,"end": 127.60},
]

SLIDES_DIR = "/home/o/workspace/jewelry-content/pengepraten-tiktok-52uker/slides"
AUDIO_PATH = "/home/o/workspace/jewelry-content/pengepraten-tiktok-52uker/audio/voiceover.mp3"
OUTPUT_PATH = "/home/o/workspace/jewelry-content/pengepraten-tiktok-52uker/video-52uker.mp4"
SEGMENTS_DIR = "/home/o/workspace/jewelry-content/pengepraten-tiktok-52uker/segments"

def run(cmd, desc=""):
    print(f"  {'⏳' if desc else '  '}{desc}")
    result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"  ❌ FAILED: {desc}")
        print(result.stderr[-500:])
        return False
    return True

def main():
    os.makedirs(SEGMENTS_DIR, exist_ok=True)
    
    # Step 1: Create individual mp4 segments for each slide
    print("\n📹 Step 1: Creating slide segments...")
    segment_files = []
    
    for slide in SLIDES:
        duration = slide["end"] - slide["start"]
        slide_path = os.path.join(SLIDES_DIR, slide["file"])
        segment_path = os.path.join(SEGMENTS_DIR, f"seg-{slide['num']:02d}.mp4")
        
        cmd = (
            f'ffmpeg -y -loop 1 -framerate 30 '
            f'-i "{slide_path}" '
            f'-t {duration:.3f} '
            f'-vf "scale=1080:1920:force_original_aspect_ratio=decrease,'
            f'pad=1080:1920:(ow-iw)/2:(oh-ih)/2:black,'
            f'format=yuv420p" '
            f'-c:v libx264 -preset fast -pix_fmt yuv420p '
            f'-an "{segment_path}"'
        )
        
        if run(cmd, f"Slide {slide['num']} ({duration:.2f}s)"):
            segment_files.append(segment_path)
    
    # Step 2: Create concat file
    print("\n🔗 Step 2: Creating concat file...")
    concat_list = os.path.join(SEGMENTS_DIR, "concat.txt")
    with open(concat_list, 'w') as f:
        for seg in sorted(os.listdir(SEGMENTS_DIR)):
            if seg.endswith('.mp4'):
                f.write(f"file '{SEGMENTS_DIR}/{seg}'\n")
    
    # Step 3: Concatenate all segments
    print("\n🎬 Step 3: Concatenating segments...")
    concat_output = os.path.join(SEGMENTS_DIR, "video_no_audio.mp4")
    cmd = (
        f'ffmpeg -y -f concat -safe 0 '
        f'-i "{concat_list}" '
        f'-c:v libx264 -preset fast -pix_fmt yuv420p '
        f'-an "{concat_output}"'
    )
    run(cmd, "Concatenating video")
    
    # Step 4: Add audio
    print("\n🎵 Step 4: Adding TTS audio...")
    cmd = (
        f'ffmpeg -y '
        f'-i "{concat_output}" '
        f'-i "{AUDIO_PATH}" '
        f'-c:v libx264 -preset fast -pix_fmt yuv420p '
        f'-c:a aac -b:a 192k '
        f'-shortest '
        f'-map 0:v:0 -map 1:a:0 '
        f'"{OUTPUT_PATH}"'
    )
    run(cmd, "Adding audio")
    
    # Step 5: Verify output
    print("\n✅ Step 5: Verifying output...")
    probe_cmd = (
        f'ffprobe -v error -show_entries format=duration:stream=codec_name,width,height '
        f'-of default=noprint_wrappers=1 "{OUTPUT_PATH}"'
    )
    result = subprocess.run(probe_cmd, shell=True, capture_output=True, text=True)
    print(result.stdout)
    
    # Check audio duration matches
    audio_probe = f'ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1 "{AUDIO_PATH}"'
    audio_result = subprocess.run(audio_probe, shell=True, capture_output=True, text=True)
    print(f"Audio duration: {audio_result.stdout.strip()}")
    print(f"Video duration: {result.stdout.strip()}")
    
    print(f"\n🎉 Output: {OUTPUT_PATH}")

if __name__ == "__main__":
    main()
