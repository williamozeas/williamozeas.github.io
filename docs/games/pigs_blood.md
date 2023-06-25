---
title: Pig's Blood
layout: landing
description: 'A Mysterious Visual Novel - Spring 2023'
image: assets/images/dimensional_rift_still_3.jpg
nav-menu: false
show_tile: false
featured_game: true
tile_index: 3
game_color: 3
---
<!-- Main -->
<div class="main pigs-blood" id="main" onclick="onPlayClick('a');">
<!-- One -->
<section id="one">
	<div class="inner" style="margin-top: -10px;">
		<p>Pig's Blood: A Rabid Wolf Hunt is a detective noir-style visual novel where you play as Detective Shepherd, known as the Boy Who Cried Wolf for his many successful arrests. The player must review evidence, interrogate suspects and call them out on their lies to find the truth behind the murder of one of the Pig brothers.</p>
        <p>This was my fourth and final game with Weekender Studios, my team for CMU 53-471, members of which can be found in the itch.io description. I very hard on this project, writing over ten minutes of music and over 2000 lines of dialogue on top of programming most of the game.</p>
		<p></p>
		<a class="button" href="https://willozeas.itch.io/pigs-blood" target="_blank">Itch.io</a>
		<a class="button" href="https://github.com/williamozeas/Pigs-Blood" target="_blank">GitHub</a>
	</div>
</section>

<section id="two">
	<div class="inner">
		<div class="row uniform pigs-blood">
			<script>
				vid_ids = ['vid1', 'vid2', 'vid3', 'vid4'];
			</script>
			<div class="4u 6u$(medium) 12u$(small)">
				<div class="box showcase" onmouseover="mouseoverBox(true, 'vid1')" onmouseleave="mouseoverBox(false, 'vid1')" onmouseclick="onPlayClick('vid1')">
					<video loop id="vid1" controls play_on_click width="100%" style="margin-left: -0.25em;">
						<source src="../assets/videos/dimensional_rift_building.mp4" type="video/mp4">
					</video>
					<h3>Scripting Pipeline</h3>
					<p>I created a scripting system so that writers could easily write dialogue and trigger in-game actions from a single document. I integrated Yarn Spinner and created 26 commands that could trigger music, visual effects, animations, and checkpoints, set internal game logic about presenting evidence, and more. The game takes over an hour to complete because of how quickly we were able to create and iterate on new content.</p>
					<p></p>
				</div>
			</div>
			<div class="4u 6u$(medium) 12u$(small)">
				<div class="box showcase" onmouseover="mouseoverBox(true, 'vid2')" onmouseleave="mouseoverBox(false, 'vid2')" onmouseclick="onPlayClick('vid2')">
					<video loop id="vid2" controls play_on_click width="100%" style="margin-left: -0.25em;">
						<source src="../assets/videos/dimensional_rift_gameflow.mp4" type="video/mp4">
					</video>
					<h3>Effects</h3>
					<p>To stylize the game, I used a screen-space Kuwahara filter made by me in addition to built in Unity post-processing. Some effects mess with gameplay, such as the Kuwahara on text or the Panini Projection on hitboxes. So, these effects are manually adjusted based on game state. In addition, I created nine "effects" to be triggered from the script, which used screenshake, flashes, and sounds to give lines different feelings.</p>
					<p></p>
				</div>
			</div>
			<div class="4u$ 6u$(medium) 12u$(small)">
				<div class="box showcase" onmouseover="mouseoverBox(true, 'vid3')" onmouseleave="mouseoverBox(false, 'vid3')" onmouseclick="onPlayClick('vid3')">
					<video loop id="vid3" controls play_on_click width="100%" style="margin-left: -0.25em;">
						<source src="../assets/videos/dimensional_rift_gun_haybale.mp4" type="video/mp4">
					</video>
					<h3>Evidence Classes</h3>
					<p>To make evidence pieces easily iterable, I refactored code from the other programmer to create template classes for multi-page pieces of evidence. To create a new piece of evidence, only code for visuals was necessary. Unfortunately, we only ended up creating two types of multi-page evidence, but the extensible classes was very flexible and would have been very useful in a larger game.</p>
					<p></p>
				</div>
			</div>
			<div class="12u 6u$(medium) 12u$(small)">
				<div id="vid4parent" class="row box showcase" onmouseover="mouseoverBox(true, 'vid4', 'vid4parent')" onmouseleave="mouseoverBox(false, 'vid4', 'vid4parent')" onmouseclick="onPlayClick('vid4')">
					<div class="4u 12u$(medium) bottom-box-image" id="design">
						<video loop id="vid4" controls play_on_click width="100%" style="margin-left: -0.25em;">
							<source src="../assets/videos/dimensional_rift_opening_cutscene.mp4" type="video/mp4">
						</video>
					</div>
					<div class="8u 12u$(medium) bottom-box" style="padding-bottom: 1em;">
						<header>
							<h3>...And The Rest</h3>
						</header>
						<p>As the main programmer, I also completed lots of other tasks. In addition to the other tasks, I also implemented the UI, worked with the 3D artist to implement the animations into Unity, QA tested, implemented all sound, created most of the evidence in Unity, implemented the lives and internal logic, and more. This is in addition to writing half of the game's dialogue/scripting, writing over ten minutes of jazz music, and creating the sound effects myself.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>


</div>
