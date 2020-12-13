

<template>
	<header>
		<div class="header-left">
			<img src="../assets/2000px-SEC_logo_in_Alabama_colors.png" alt="">
			<h1>FAM<span class="color-red">PICKS</span></h1>
		</div>
		<div class="header-right">
			<div class="fam">
				<h2>Annie (John)</h2>
				<p>48</p>
			</div>
			<div class="fam">
				<h2>Carolyn</h2>
				<p>42</p>
			</div>
			<div class="fam">
				<h2>Rudy</h2>
				<p>43</p>
			</div>
			<div class="fam">
				<h2>Jenny</h2>
				<p>39</p>
			</div>
			<div class="fam">
				<h2>Blake</h2>
				<p>36</p>
			</div>
			<div class="fam mobile-fam">
				<h2 class="fam-lead">Brandi/Ocean</h2>
				<p class="score-lead">51</p>
			</div>
			<div class="leader">
				<p>*LEADER*</p>
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
	  font-family: 'Quantico', sans-serif;
      background-color: white;
      height: 100px;
      width: 100%;
      box-shadow: 0 .6px 5px 1px rgba(0,0,0,0.2);
      position: fixed;
  	}

	header span.color-red {
	  color: rgb(166,12,49);
  	}

	.header-left {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		display: flex;
		align-items: center;
	}

	.header-left img {
		height: 70px;
		padding-left: 20px;
	}

	.header-left h1 {
		font-size: 40px;
		color: rgb(0, 0, 0);
		margin-left: 20px;
	}

	.header-right {
		display: flex;
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-48%);
		height: 100%;
		align-items: center;
		justify-content: center;
	}

	.fam + .fam {
		border-left: 1px solid rgb(219, 219, 219);
	}

	.fam {
		padding: 10px 20px;
		color: gray;
	}

	.leader {
		font-family: 'Montserrat', sans-serif;
		font-weight: 400;
		margin-top: 5px;
		display: none;
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
		height: 29px;
		font-weight: 700;
		color: rgb(166,12,49);
		border-bottom: 2px solid rgb(166,12,49);
		position: relative;
		left: 50%;
		transform: translateX(-50%);
		width: 25%;
	}

  @media all and (max-width: 1100px) {
	.fam {
		padding: 0 15px;
	}

	.fam h2 {
		font-size: 17px;
		margin-bottom: -5px;
	}
  }

  @media all and (max-width: 900px) {
	.header-right {
		flex-direction: column;
		margin-right: 5px;
	}
	
	.fam {
		display: none;
	}

	.mobile-fam {
		display: block;
 	 }
	
	.fam + .fam {
		border: none;
  	}

	.leader {
		display: block;
		margin-top: 2px;
		font-size: 14px;
	}
  }

  @media all and (max-width: 500px) {
	header {
		position: relative;
		height: 80px;
	}

	.header-left img {
		height: 65px;
		padding-left: 15px;
	}

	.header-left h1 {
		font-size: 28px;
		margin-left: 15px;
  	}
	
	.header-right {
		margin-right: 0;
	}

	.fam h2 {
		font-size: 16px;
		margin-bottom: -5px;
	}

	.leader {
		margin-top: 5px;
		font-size: 12px;
	}
  }

  @media all and (max-width: 375px) {
	.header-left img {
		height: 50px;
		padding-left: 8px;
	}

	.header-left h1 {
		font-size: 24px;
		margin-left: 6px;
  	}
	
	.header-right {
		margin-right: -6px;
	}

	.fam h2 {
		font-size: 16px;
		margin-bottom: -2px;
	}

	.fam p {
		font-size: 18px;
	}

	.score-lead {
		height: 25px;
	}
  }

</style>