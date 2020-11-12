/* eslint-disable */

<template>
	<header>
        <div class="header-div">
            <img src="../assets/2000px-SEC_logo_in_Alabama_colors.png" alt="">
            <h1>FAM<span class="color-red">PICKS</span></h1>
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
      height: 80px;
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
    height: 60px;
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
  }

  header h1 {
    font-family: 'Quantico', sans-serif;
    font-size: 35px;
    color: rgb(0, 0, 0);
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 95px;
  }

  header span.color-red {
      color: rgb(166,12,49);
  }
</style>