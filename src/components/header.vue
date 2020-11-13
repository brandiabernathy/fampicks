

<template>
	<header>
        <div class="header-div">
			<div class="header-left">
				<img src="../assets/2000px-SEC_logo_in_Alabama_colors.png" alt="">
				<h1>FAM<span class="color-red">PICKS</span></h1>
			</div>
			<div class="header-right">
				<div class="fam">
					<h2>Annie (John)</h2>
					<p>28</p>
				</div>
				<div class="fam">
					<h2>Carolyn</h2>
					<p>26</p>
				</div>
				<div class="fam">
					<h2>Rudy</h2>
					<p>26</p>
				</div>
				<div class="fam">
					<h2>Jenny</h2>
					<p>26</p>
				</div>
				<div class="fam">
					<h2>Blake</h2>
					<p>16</p>
				</div>
				<div class="fam">
					<h2 class="fam-lead">Brandi/Ocean</h2>
					<p class="score-lead">31</p>
				</div>
			</div>
        </div>
    </header>
</template>


<style>
	/* RESET */


	html, body, p, ol, ul, li, dl, dt, dd, blockquote, figure, fieldset, legend, textarea, pre, iframe, hr, h1, h2, h3, h4, h5, h6, button, div, img {
		margin: 0;
		padding: 0;
		display: block;
		text-decoration: none;
	}

	a {
		text-decoration: none;
	}

	.clear-fix {
		content: "";
		display: table;
		clear: both;
	}
  
  
	/* END RESET */
	
	body {
		background-color: rgb(241, 243, 245);
		font-family: sans-serif;
	}

	header {
      background-color: white;
      height: 100px;
      width: 100%;
      box-shadow: 0 .6px 5px 1px rgba(0,0,0,0.2);
      position: fixed;
      z-index: 100;
  }

  .header-div {
    position: relative;
    height: 100%;
  }

  header img {
    height: 70px;
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
  }

  header h1 {
    font-family: 'Quantico', sans-serif;
    font-size: 40px;
    color: rgb(0, 0, 0);
    position: absolute;
	top: 50%;
    transform: translateY(-50%);
    margin-left: 105px;
  }

  header span.color-red {
    color: rgb(166,12,49);
  }

  .header-left {
	float: left;
  }

  .header-right {
	font-family: 'Quantico', sans-serif;
	display: flex;
	position: absolute;
	right: 0;
	top: 50%;
	transform: translateY(-48%);
  }

  .fam + .fam {
	border-left: 1px solid rgb(219, 219, 219);
  }

  .fam {
	padding: 0 20px;
	color: gray;
  }

  h2 + h2 {
  }

  .fam h2 {
	text-align: center;
	font-size: 20px;
	letter-spacing: -.5px;
	margin-bottom: 3px;
  }

  .fam p {
	font-size: 20px;
	text-align: center;
  }

  .fam-lead {
	color: black;
	font-weight: 700;
  }

  .score-lead {
	font-weight: 700;
	font-size: inherit;
	color: rgb(166,12,49);
	border-bottom: 2px solid rgb(166,12,49);
	position: relative;
	left: 50%;
	transform: translateX(-50%);
	width: 25%;
  }

</style>