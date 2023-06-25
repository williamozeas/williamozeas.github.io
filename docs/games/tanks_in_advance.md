---
title: Tanks In Advance
layout: landing
description: 'A Mind-Bending 1v1 - Spring 2023'
image: assets/images/dimensional_rift_still_3.jpg #TODO CHANGE
nav-menu: false
show_tile: false
featured_game: true
tile_index: 2
game_color: 5
---
<!-- Main -->
<div class="main tanks-in-advance" id="main" onclick="onPlayClick('a');">
<!-- One -->
<section id="one">
	<div class="inner" style="margin-top: -10px;">
		<p>Tanks In Advance, my final game and second as game co-lead in the Game Creation Society, takes a simple 1v1 tank game and adds a time-traveling twist. In each consecutive round, players battle alongside their past selves from previous rounds to defeat their opponent.</p> <p>This game was my concept, and I worked with <a href="https://ama28.github.io" target="_blank">Adrian Ma</a> to lead a team of around 10 members, most of whom were programmers. My goal was to keep scope small so we could make a finished, polished game in one semester. I managed the programming and sound teams on top of being the lead VFX artist, a discipline I had very little experience in beforehand. In the end, we created a remarkably polished game for GCS and won the Best Sound award.</p>
		<p></p>
		<a class="button" href="https://willozeas.itch.io/tanks-in-advance" target="_blank">Itch.io</a>
		<a class="button" href="https://www.gamecreation.org/games/tanks_in_advance" target="_blank">Game Creation Society</a>
		<a class="button" href="https://github.com/williamozeas/Tanks-In-Advance" target="_blank">GitHub</a>
	</div>
</section>

<section id="two">
	<div class="inner">
		<div class="row uniform tanks-in-advance">
			<script>
				vid_ids = ['vid1', 'vid2', 'vid3', 'vid4'];
			</script>
			<div class="4u 6u$(medium) 12u$(small)">
				<div class="box showcase" onmouseover="mouseoverBox(true, 'vid1')" onmouseleave="mouseoverBox(false, 'vid1')" onmouseclick="onPlayClick('vid1')">
					<video loop id="vid1" controls play_on_click width="100%" style="margin-left: -0.25em;">
						<source src="../assets/videos/dimensional_rift_building.mp4" type="video/mp4">
					</video>
					<h3>Command Pattern</h3>
					<p>To implement the game's main mechanic, playing alongside your past selves, I wrote the game's base code, including movement and aiming, using the command pattern. This meant every action, like moving and shooting, was a timestamped object that was saved and replayed in the next round. I also manually wrote bullet ricochet code to avoid indeterminacy in Unity's physics system.</p>
					<p></p>
				</div>
			</div>
			<div class="4u 6u$(medium) 12u$(small)">
				<div class="box showcase" onmouseover="mouseoverBox(true, 'vid2')" onmouseleave="mouseoverBox(false, 'vid2')" onmouseclick="onPlayClick('vid2')">
					<video loop id="vid2" controls play_on_click width="100%" style="margin-left: -0.25em;">
						<source src="../assets/videos/dimensional_rift_gameflow.mp4" type="video/mp4">
					</video>
					<h3>Shader Stylizing</h3>
					<p>With only one artist active on the team, I decided to focus on improving the visuals with code. Using Unity's Shader Graph and Render Features, I made shaders to seamlessly outline the grid-based maps, highlight tanks' movement behind walls. The outline shader uses a Sobel filter to highlight sharp changes in normal and depth buffers, which was necessary for seamless outlines on our block-based maps. </p>
					<p></p>
				</div>
			</div>
			<div class="4u$ 6u$(medium) 12u$(small)">
				<div class="box showcase" onmouseover="mouseoverBox(true, 'vid3')" onmouseleave="mouseoverBox(false, 'vid3')" onmouseclick="onPlayClick('vid3')">
					<video loop id="vid3" controls play_on_click width="100%" style="margin-left: -0.25em;">
						<source src="../assets/videos/dimensional_rift_gun_haybale.mp4" type="video/mp4">
					</video>
					<h3>Other VFX</h3>
					<p>As a VFX artist, I made stylized tank & mine explosions, a color-changing win circle, and a big laser.I started learning Unity's VFX graph with tutorials before modifying them or trying to make my own effects from scratch. I also used Blender to create a cylinder without circular sides and specific UVs and Krita to create a texture for the laser effect.</p>
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
							<h3>Programming Management</h3>
						</header>
						<p>The Tanks In Advance team was almost all programmers, so managing the programming team was a big task. We also had members of various skill levels, ranging from brand new freshmen to seniors who had used Unity in GCS for four years. My job, on top of the above features, was to split up the work and help where needed. I provided ideas on implementations, debugging help, and pointers to resources where needed, and also integrated different programmers' work. Eventually, when all of the easier tasks had been completed, I reassigned the two newest programmers to work on level design and QA, which worked out fantastically for bug catching polish.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>


</div>
