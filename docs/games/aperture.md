---
title: Aperture
layout: landing
description: 'Graphics From The Ground Up - Winter 2022'
image: assets/images/aperture_still_5.png
nav-menu: false
show_tile: false
featured_game: true
tile_index: 0
game_color: 1
---

<!-- Main -->
<div class="aperture" id="main" onclick="onPlayClick('a');">
<!-- One -->
<section id="one">
	<div class="inner" style="margin-top: -10px;">
		<p>Built nearly from the ground up in C++ using OpenGL and SDL, Aperture is my most technically impressive game by far. In it, the player explores a small island, taking pictures of the native flora and fauna. In a team of three, I was the primary graphics programmer, as well as a gameplay and UI programmer and the sound designer. This game was created for CMU 15-466 Computer Game Programming, a class about creating games and game engines.</p>
		<a class="button" href="https://scottking.itch.io/aperture" target="_blank">Itch.io</a>
		<a class="button" href="https://github.com/jsking2920/466-Aperture" target="_blank">GitHub</a>
	</div>
</section>

<section id="two">
	<div class="inner">
		<div class="row uniform aperture">
			<script>
				vid_ids = ['vid1', 'vid2', 'vid3', 'vid4', 'vid5', 'vid6', 'vid8', 'vid9'];
			</script>
			<div class="4u 6u$(medium) 12u$(small)">
				<div class="box showcase" onmouseover="mouseoverBox(true, 'vid1')" onmouseleave="mouseoverBox(false, 'vid1')" onmouseclick="onPlayClick('vid1')">
					<video loop id="vid1" controls play_on_click width="100%" style="margin-left: -0.25em;">
						<source src="../assets/videos/aperture_title.mp4" type="video/mp4">
					</video>
					<h3>Occlusion Queries</h3>
					<p>Our main mechanic, picture-taking, required object detection. However, we wanted to find a better way than just raycasting from the camera. So, I used OpenGL's hardware occlusion queries to count the number of fragments that get rendered from each object, which was then used for scoring and other mechanics. I implemented occlusion culling using the same queries - each object would be drawn and queried each frame, and if its query returned zero, it would not render to screen with our more intensive shader. I also made a queue of queries per object, so that we would query each frame but only use the fragment count of the most recent finished query to prevent the game from freezing until each query finishes.</p>
					<p></p>
				</div>
			</div>
			<div class="4u$ 6u$(medium) 12u$(small)">
				<div class="box showcase" onmouseover="mouseoverBox(true, 'vid4')" onmouseleave="mouseoverBox(false, 'vid4')" onmouseclick="onPlayClick('vid4')">
					<video loop id="vid4" controls play_on_click width="100%" style="margin-left: -0.25em;">
						<source src="../assets/videos/aperture_focus.mp4" type="video/mp4">
					</video>
					<h3>Custom Shaders</h3>
					<p>In addition to shaders described elsewhere, I implemented distance-based fog that changed color with the sky, color grading, integrated a teammate's animation code, and wrote my favorite shader, the camera depth-of-field effect. That shader renders a blurred texture of the screen, then blends it with the normal screen texture based on focus calculated via a depth texture. This worked, but had issues when foreground blurred objects' edges overlaid in-focus objects. With more time, I would fix this by instead computing focus amount for each pixel along with the depth, then generating a blurred texture that, when sampling neighbors' colors, weights those colors by the focus amount. This should fix the issue and is more efficient as it renders each object three times instead of four.</p>
					<p></p>
				</div>
			</div>
			<div class="4u 6u$(medium) 12u$(small)">
				<div class="box showcase" onmouseover="mouseoverBox(true, 'vid2')" onmouseleave="mouseoverBox(false, 'vid2')" onmouseclick="onPlayClick('vid2')">
					<video loop id="vid2" controls play_on_click width="100%" style="margin-left: -0.25em;">
						<source src="../assets/videos/aperture_grading.mp4" type="video/mp4">
					</video>
					<h3>Pictures</h3>
					<p>I wrote the code to store, export, and grade pictures. Each picture stored data about the fragment count of each object in the picture as well as the creatures in the photo and their focus, relative position, and other state. I also implemented the photo grading system, which grades each creature in the picture based on fragment count, invisible "focal points" included in the model, creature angle (closeness to an authored best angle), position in frame, how in focus it is, and whether it's displaying a bonus behavior. The highest scoring creature is the "subject", and the rest are reduced and given as bonus points. Plant variety is also detected and given bonus points.</p>
					<p></p>
				</div>
			</div>
			<div class="4u$ 6u$(medium) 12u$(small)">
				<div class="box showcase" onmouseover="mouseoverBox(true, 'vid3')" onmouseleave="mouseoverBox(false, 'vid3')" onmouseclick="onPlayClick('vid3')">
					<video loop id="vid3" controls play_on_click width="100%" style="margin-left: -0.25em;">
						<source src="../assets/videos/aperture_shadows_3.mp4" type="video/mp4">
					</video>
					<h3>Lighting</h3>
					<p>Using OpenGL, I implemented forward lighting in-game. There were only two real light sources in the game - the sun/moon and ambient light from the sky. Because of the day/night cycle, we could not bake shadow maps, so I also implemented shadow mapping to both add immersion and emphasize the passage of time. I used a very simple blurring algorithm to tone down the pixelated edges of the shadows. I also wrote code to change the angle and color of the lighting based on time of day and modified my teammate's sky color code to add sunrises and sunsets.</p>
					<p></p>
				</div>
			</div>
			<div class="4u$ 6u$(medium) 12u$(small)">
				<div class="box showcase" onmouseover="mouseoverBox(true, 'vid5')" onmouseleave="mouseoverBox(false, 'vid5')" onmouseclick="onPlayClick('vid5')">
					<video loop id="vid5" controls play_on_click width="100%" style="margin-left: -0.25em;">
						<source src="../assets/videos/aperture_closeup.mp4" type="video/mp4">
					</video>
					<h3>Pipelines</h3>
					<p>Given we had no engine, it was important to build some tools to allow us to quickly add content to our game. When I integrated textures into the main shader, I also programmed a small pipeline to automatically assign textures to objects based on name. I also wrote some CSV parsing code to allow us to easily add creature descriptions, point values, names, et cetera to the game. Finally, I also wrote a small audio pipeline, although it required the user to type in the name of the file.</p>
					<p></p>
				</div>
			</div>
			<div class="4u$ 6u$(medium) 12u$(small)">
				<div class="box showcase" onmouseover="mouseoverBox(true, 'vid6')" onmouseleave="mouseoverBox(false, 'vid6')" onmouseclick="onPlayClick('vid6')">
					<video loop id="vid6" controls play_on_click width="100%" style="margin-left: -0.25em;">
						<source src="../assets/videos/aperture_sound.mp4" type="video/mp4">
					</video>
					<h3>Sound</h3>
					<p>I was the solo sound person on the project, and as such, I made all the sound effects and music for the game. Much of the sound engine code was given as part of our starter code, but I went in and implemented the ability to play sound at variable speed. This let me play sound effects with random pitching, preventing them from getting stale. In addition, some of the starter code was implemented by us earlier in the year. The music and all 12 sound effects except one were made from scratch with a synth. The music also syncs to the time of day, being bright and cheery during the day and getting more eerie at night.</p>
					<p></p>
				</div>
			</div>
			<div class="4u$ 6u$(medium) 12u$(small)">
				<div class="box showcase" onmouseover="mouseoverBox(true, 'vid8')" onmouseleave="mouseoverBox(false, 'vid8')" onmouseclick="onPlayClick('vid8')">
					<video loop id="vid8" controls play_on_click width="100%" style="margin-left: -0.25em;">
						<source src="../assets/videos/aperture_game_logic.mp4" type="video/mp4">
					</video>
					<h3>Game Logic</h3>
					<p>In addition to graphics, sound, and other responsibilities, I also programmed much of the general game logic. For instance, I wrote unique behaviors for each of the six creatures in the game, such as the meepers, who fly around a set home location, the snalers, which hide in their shell if you get too close, or the tantrus, which emerges from the sea around sunset, flies around a set path over the island, and returns to the sea. Some creatures also have behaviors triggered by picture-taking, such as the floaters, who float away into the sky if you take a picture of them.I also wrote the code to keep track of what creatures you've taken pictures of, the number of times you've seen them, your best picture of them, et cetera to emulate a "pokedex" pause menu. I also did the UI for this menu.</p>
					<p></p>
				</div>
			</div>
			<div class="4u$ 6u$(medium) 12u$(small)">
				<div class="box showcase" onmouseover="mouseoverBox(true, 'vid9')" onmouseleave="mouseoverBox(false, 'vid9')" onmouseclick="onPlayClick('vid9')">
					<video loop id="vid9" controls play_on_click width="100%" style="margin-left: -0.25em;">
						<source src="../assets/videos/aperture_end.mp4" type="video/mp4">
					</video>
					<h3>Optimization</h3>
					<p>Finally, I worked a bit on optimization. Due to the small scale of the game, not much was necessary, provided I built the shaders somewhat efficiently. After we finished the game, the main optimization issue was loading, which took about 30 seconds on my computer. However, I went back in and implemented multithreaded resource loading and optimized our texture resource sharing, which brought the time to 10 seconds, three times faster. During development I decided to implement occlusion culling mostly for educational purposes, but after I finished building it, I measured the FPS and realized that the game was 1-2 frames faster per second without it on. Occlusion culling required an extra pre-pass, and the game visuals weren't complex/big enough that the saved shading time offset the occlusion culling overhead.</p>
					<p></p>
				</div>
			</div>
			<!-- <div class="12u 6u$(medium) 12u$(small)">
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
			</div> -->
		</div>
		<br>
				<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1420952284&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/willowpet" title="willowpet" target="_blank" style="color: #cccccc; text-decoration: none;">willowpet</a> · <a href="https://soundcloud.com/willowpet/strange-new-world-aperture-ost" title="Strange New World - Aperture OST" target="_blank" style="color: #cccccc; text-decoration: none;">Strange New World - Aperture OST</a></div>
	</div>
</section>


</div>

