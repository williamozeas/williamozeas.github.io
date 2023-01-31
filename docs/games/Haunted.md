---
title: Haunted
layout: landing
description: 'Terrifying VR Sound - Fall 2021'
image: assets/images/haunted_still_1.jpg
nav-menu: false
show_tile: false
featured_game: false
tile_index: 4
game_color: 3
---

<!-- Main -->
<div class="main haunted" id="main" onclick="onPlayClick('a');">
<!-- One -->
<section id="one">
	<div class="inner" style="margin-top: -10px;">
		<p>Haunted is a VR horror game where the only way to die is to flinch. The player holds a candle, which they must keep steady as the game tries to frighten you into moving it too quickly. As the solo audio person on a team of over 20, I implemented 42 sound effects in FMOD (using Google Resonance for spatialization) and Unity/C#. These sounds included voice-over and an adaptive piano instrument that generated progressively frantic music the faster an object moved. This game was created in Fall '21 as part of the Game Creation Society (GCS) at CMU.</p>
		<p></p>
		<a class="button" href="https://www.gamecreation.org/games/haunted" target="_blank">GCS Website</a>
	</div>
</section>

<section id="two">
	<div class="inner">
	<h2>Gameplay</h2>
		<iframe width="560" height="315" src="https://www.youtube.com/embed/gQKX-AO6mgU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
	</div>
</section>
<!-- <section id="two">
	<div class="inner">
		<div class="row uniform dimensional-rift">
			<script>
				vid_ids = ['vid1', 'vid2', 'vid3', 'vid4'];
			</script>
			<div class="4u 6u$(medium) 12u$(small)">
				<div class="box showcase" onmouseover="mouseoverBox(true, 'vid1')" onmouseleave="mouseoverBox(false, 'vid1')" onmouseclick="onPlayClick('vid1')">
					<video loop id="vid1" controls play_on_click width="100%" style="margin-left: -0.25em;">
						<source src="../assets/videos/dimensional_rift_building.mp4" type="video/mp4">
					</video>
					<h3>Building System</h3>
					<p>As you play Dimensional Rift, you gradually build up your base with revenue-generating farms, moveable hay bales, and static buildings to be used as platforms. I wrote all of the building code in the game (except for hay bales being moveable), including placement on the grid, enemy targeting and health, and farm growth and harvesting.</p>
					<p></p>
				</div>
			</div>
			<div class="4u 6u$(medium) 12u$(small)">
				<div class="box showcase" onmouseover="mouseoverBox(true, 'vid2')" onmouseleave="mouseoverBox(false, 'vid2')" onmouseclick="onPlayClick('vid2')">
					<video loop id="vid2" controls play_on_click width="100%" style="margin-left: -0.25em;">
						<source src="../assets/videos/dimensional_rift_gameflow.mp4" type="video/mp4">
					</video>
					<h3>Dialogue Pipeline</h3>
					<p>Throughout the game, Sam and Freida converse about themselves and their situation, growing closer as you survive more waves. I worked with the lead writer to implement a pipeline from .txt files into the game, where different conversations require different levels to occur. I also combined my own code with that of another programmer and an artist that triggered and displayed the conversations into a fully functional conversation system.</p>
					<p></p>
				</div>
			</div>
			<div class="4u$ 6u$(medium) 12u$(small)">
				<div class="box showcase" onmouseover="mouseoverBox(true, 'vid3')" onmouseleave="mouseoverBox(false, 'vid3')" onmouseclick="onPlayClick('vid3')">
					<video loop id="vid3" controls play_on_click width="100%" style="margin-left: -0.25em;">
						<source src="../assets/videos/dimensional_rift_gun_haybale.mp4" type="video/mp4">
					</video>
					<h3>Game Flow</h3>
					<p>Much of my time was devoted to writing classes that were the basis for larger systems. For instance, I wrote a class to represent waves for the game designers' ease of use. I also wrote the code to trigger waves using C# events with attached wave objects, and helped other programmers integrate their features into the system. I go into more detail in the leadership section.</p>
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
							<h3>Team Leadership</h3>
						</header>
						<p>Dimensional Rift was my first time leading a full team on a game - I had lead small sound teams before, but those experiences were much different. Much of my time spent with this game was spent aiding, consolidating, and refactoring the work of others. For the sound team, I mostly let the members decide on creative direction and acted as a producer until near the end of the project, when I stepped in to fill some holes in sound effects and implementation. However, for the programming team I answered lots of questions, integrated people's code, and fixed their bugs/git issues. It was my first time in a managerial code role, but I found I did enjoy it quite a bit.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section> -->

</div>
