---
title: polyrhythm
layout: landing
description: 'A Solo Rhythmic Challenge - Fall 2021'
image: assets/images/polyrhythm_still_4.jpg
nav-menu: false
show_tile: false
featured_game: true
tile_index: 2
game_color: 2
---
<!-- Main -->
<div class="polyrhythm" id="main" onclick="onPlayClick('a');">
<!-- One -->
<section id="one">
	<div class="inner" style="margin-top: -10px;">
		<h4>Warning: Page containes gifs with flashing lights</h4>
		<p>Polyrhythm is a two-button rhythm game for musicians. Instead of a typical rhythm game, where players test their timing, reactions, and memory, polyrhythm tests the player's ability to recognize musical patterns and play them precisely in two hands. The game consists of a series of "loops" that repeat a rhythmic pattern in both hands, like drums. The player must recognize the pattern and play it to fill up the background with a new color, at which point the music seamlessly transitions to the next loop (with a light show along the way). As my first solo project in Unity, I learned a lot making polyrhythm, especially about planning out game-wide systems and electronic music.</p>
		<a class="button" href="https://willozeas.itch.io/polyrhythm" target="_blank">Itch.io</a>
		<a class="button" href="https://github.com/williamozeas/polyrhythm/" target="_blank">GitHub</a>
	</div>
</section>

<section id="two">
	<div class="inner">
		<div class="row uniform polyrhythm">
			<script>
				vid_ids = ['vid1', 'vid2', 'vid3'];
			</script>
			<div class="4u 6u$(medium) 12u$(small)">
				<div class="box showcase" onmouseover="mouseoverBox(true, 'vid1')" onmouseleave="mouseoverBox(false, 'vid1')" onmouseclick="onPlayClick('vid1')">
					<video loop id="vid1" controls play_on_click width="100%" style="margin-left: -0.25em;">
						<source src="../assets/videos/polyrhythm_intro.mp4" type="video/mp4">
					</video>
					<h3>Adaptive Soundtrack</h3>
					<p>Polyrhythm's adaptive soundtrack was entirely produced and implemented by me in Logic and FMOD. It consists of several loop areas that may repeat indefinitely, often with variations or evolutions to keep them fresh, and musical flourishes linking them. However, the intro is more generative, changing the tempo, notes, and mixing of the music to build tension depending on how far the player has filled the background bar with correct hits, and releasing it if they start missing. The full FMOD project is included in the GitHub repository, and the soundtrack is at the bottom of the page.</p>
					<p></p>
				</div>
			</div>
			<div class="4u 6u$(medium) 12u$(small)">
				<div class="box showcase" onmouseover="mouseoverBox(true, 'vid2')" onmouseleave="mouseoverBox(false, 'vid2')" onmouseclick="onPlayClick('vid2')">
					<video loop id="vid2" controls play_on_click width="100%" style="margin-left: -0.25em;">
						<source src="../assets/videos/polyrhythm_transitions.mp4" type="video/mp4">
					</video>
					<h3>Mapping Pipeline</h3>
					<p>All visuals are determined from the FMOD project, where I used the marker callback system to send messages to Unity where they were parsed. These messages could trigger notes, color changes, game environment changes like percentage fill per hit, or custom functions, each with parameters. This pipeline abstracted mapping away from coding, and allowed me to trigger things very precisely with the music. This could certainly be improved, as manually placing every note is cumbersome. If given time, I would instead trigger patterns of notes from text files instead of individual notes.</p>
					<p></p>
				</div>
			</div>
			<div class="4u$ 6u$(medium) 12u$(small)">
				<div class="box showcase" onmouseover="mouseoverBox(true, 'vid3')" onmouseleave="mouseoverBox(false, 'vid3')" onmouseclick="onPlayClick('vid3')">
					<video loop id="vid3" controls play_on_click width="100%" style="margin-left: -0.25em;">
						<source src="../assets/videos/polyrhythm_demonstration.mp4" type="video/mp4">
					</video>
					<h3>Effects & Accessibility</h3>
					<p>Because I am not an artist, I decided on a simple geometric style with lots of bloom, chromatic aberration, and other effects to get a cool look programmatically. Some effects, like shake and particles, were added to give better feedback to the player. However, these effects proved to be overstimulating for some players in play testing, so I added a functional options menu. Because of the nature of the game, I did not have to pause the music while paused, so I simply paused hit calculations and applied a low pass filter for the menu.</p>
					<p></p>
				</div>
			</div>
			<div class="12u 6u$(medium) 12u$(small)">
				<div class="row box showcase"  onmouseover="setLightBox(true, 'design')" onmouseleave="setLightBox(false, 'design')">
					<div class="4u 12u$(medium) bottom-box-image" id="design">
						<img  src="{% link assets/images/polyrhythm_still_5.jpg %}" alt="" data-position="25% 25%" />
					</div>
					<div class="8u 12u$(medium) bottom-box" style="padding-bottom: 1em;">
						<header>
							<h3>Design Process</h3>
						</header>
						<p>When I started to design polyrhythm, my goal was to emphasize musical skill over reaction speed and timing in a typical rhythm game, and everything followed from there. The most obvious solution, then, was to remove note hit indicators, since players didn't need any sense of musical timing when they could just react to note indicators. However, this created a big problem - if you didn't know notes were coming, it would feel unfair to be punished for missing one. Thus, I had to create a rhythm game that allowed the player to miss notes, yet still required them to hit them. Then, it hit me - If the music only progressed when the player hit the notes, then the player would be able to miss as many notes as they wanted. Thus, polyrhythm was born - the adaptive soundtrack allows the music to loop indefinitely until the player masters the pattern in each "loop", at which point the music continues. The goal of the player is to master the patterns as quickly as possible, thereby getting a faster time through the song.</p>
					</div>
				</div>
			</div>
		</div>
		<br>
				<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1166304574&color=%23ff5500&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/willowpet" title="willowpet" target="_blank" style="color: #cccccc; text-decoration: none;">willowpet</a> · <a href="https://soundcloud.com/willowpet/first-polyrhythm-ost" title="color - polyrhythm OST" target="_blank" style="color: #cccccc; text-decoration: none;">color - polyrhythm OST</a></div>
	</div>
</section>


</div>
