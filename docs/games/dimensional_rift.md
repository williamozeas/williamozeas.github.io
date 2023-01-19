---
title: Dimensional Rift 
layout: landing
description: 'Mind-Bending Co-op - Fall 2022'
image: assets/images/dimensional_rift_still_3.jpg
nav-menu: false
show_tile: false
featured_game: true
tile_index: 3
game_color: 4
---
<!-- Main -->
<div class="main dimensional-rift" id="main" onclick="onPlayClick('a');">
<!-- One -->
<section id="one">
	<div class="inner" style="margin-top: -10px;">
		<p>Dimensional Rift is an asymmetrical co-op wave defense game where one player is the hardened space warrior, Sam, and the other is the cheery and naïve farmer, Freida. When Sam jumps through a portal to Freida's world, they bring with them an alien invasion. The pair must work together to repair and defend Freida's farm. Freida evades enemies, collects coins, and rearranges the farm to help Sam navigate as they defeat aliens and rebuild buildings. However, there's a catch: Freida navigates her world from a top-down perspective, but Sam navigates it like a 2D platformer - meaning Freida's walls are Sam's platforms.<br><br>I co-lead Dimensional Rift development along with Adrian Ma as part of CMU's Game Creation Society Fall 2022. Below are three areas I contributed considerably to, although my greatest contribution was made via management duties with the audio and programming teams.</p>
		<p></p>
		<a class="button" href="https://arkaio.itch.io/dimensional-rift" target="_blank">Itch.io</a>
		<a class="button" href="https://www.gamecreation.org/games/dimensional_rift" target="_blank">Game Creation Society</a>
		<a class="button" href="https://github.com/ama28/Dimensional-Rift/" target="_blank">GitHub</a>
	</div>
</section>

<section id="two">
	<div class="inner">
		<div class="row uniform dimensional-rift">
			<script>
				vid_ids = ['vid1', 'vid2', 'vid3'];
			</script>
			<div class="4u 6u$(medium) 12u$(small)">
				<div class="box showcase" onmouseover="mouseoverBox(true, 'vid1')" onmouseleave="mouseoverBox(false, 'vid1')" onmouseclick="onPlayClick('vid1')">
					<video loop id="vid1" controls play_on_click width="100%" style="margin-left: -0.25em;">
						<source src="../assets/videos/polyrhythm_intro.mp4" type="video/mp4">
					</video>
					<h3>Building System</h3>
					<p>As you play Dimensional Rift, you gradually build up your base with revenue-generating farms, moveable hay bales, and static buildings to be used as platforms. I wrote all of the building code in the game (except for hay bales being moveable), including placement on the grid, enemy targeting and health, and farm growth and harvesting.</p>
					<p></p>
				</div>
			</div>
			<div class="4u 6u$(medium) 12u$(small)">
				<div class="box showcase" onmouseover="mouseoverBox(true, 'vid2')" onmouseleave="mouseoverBox(false, 'vid2')" onmouseclick="onPlayClick('vid2')">
					<video loop id="vid2" controls play_on_click width="100%" style="margin-left: -0.25em;">
						<source src="../assets/videos/polyrhythm_transitions.mp4" type="video/mp4">
					</video>
					<h3>Dialogue Pipeline</h3>
					<p>Throughout the game, Sam and Freida converse about themselves and their situation, growing closer as you survive more waves. I worked with the lead writer to implement a pipeline from .txt files into the game, where different conversations require different levels to occur. I also combined my own code with that of another programmer and an artist that triggered and displayed the conversations into a fully functional conversation system.</p>
					<p></p>
				</div>
			</div>
			<div class="4u$ 6u$(medium) 12u$(small)">
				<div class="box showcase" onmouseover="mouseoverBox(true, 'vid3')" onmouseleave="mouseoverBox(false, 'vid3')" onmouseclick="onPlayClick('vid3')">
					<video loop id="vid3" controls play_on_click width="100%" style="margin-left: -0.25em;">
						<source src="../assets/videos/polyrhythm_demonstration.mp4" type="video/mp4">
					</video>
					<h3>Game Flow</h3>
					<p>Much of my time was devoted to writing classes that were the basis for larger systems. For instance, I wrote a class to represent waves for the game designers' ease of use. I also wrote the code to trigger waves using C# events with attached wave objects, and helped other programmers integrate their features into the system. I go into more detail in the leadership section.</p>
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
							<h3>Team Leadership</h3>
						</header>
						<p>Dimensional Rift was my first time leading a full team on a game - I had lead small sound teams before, but those experiences were much different. Much of my time spent with this game was spent aiding, consolidating, and refactoring the work of others. For the sound team, I mostly let the members decide on creative direction and acted as a producer until near the end of the project, when I stepped in to fill holes in sound effects and implementation. However, for the programming team I answered lots of questions, integrated people's code, and fixed their bugs/git issues. It was my first time in a managerial code role, but I found I did enjoy it quite a bit.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>


</div>
