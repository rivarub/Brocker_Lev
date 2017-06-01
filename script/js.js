/*Головна сторінка - види страхування*/
/*function showText (el) {
	if(el.previousElementSibling.clientHeight === 30) {
		el.previousElementSibling.style.height = "100%";
		el.innerHTML = "Сховати...";
	} else {
		el.previousElementSibling.style.height = "30px";
		el.innerHTML = "Читати більше...";
	}
}*/

function showText (el) {
	if(el.previousElementSibling.clientHeight === 0) {
		el.previousElementSibling.style.height = "100%";
		el.innerHTML = "Сховати...";
	} else {
		el.previousElementSibling.style.height = "0px";
		el.innerHTML = "Читати більше...";
	}
}

/*TELEPHONE*/

$(document).ready(function () { 
	jQuery(function($){
   		$(".telephone").mask("+38 (999) 999-99-99");
	});
});

/*DATE*/

$(document).ready(function () { 
	jQuery(function($){
   		$(".date-mask").mask("99/99/9999",{placeholder:"дд/мм/рррр"});
	});
});

/*$(function () {
  $("input").one('focus', function () {
    $(this).val("+380-")
  });
});*/
/*<script type="text/javascript">
        $.jMaskGlobals = {translation: {
                'n': {pattern: /\d/},
            }
        };
        $('.phone-mask').mask('+38(0nn)nnn-nn-nn').val('+380');
    </script>*/


/*RIGHT BLOCK*/
/*function showBox(el) {
	document.getElementByClass("invisible").style.display = "inlile-block";
}*/

/*$("#click").click(function(){
	$(".invisible").css("display","block")
})*/

/*$(document).ready(function () { 
  $(".invisible").hide();
  $('#click').click(function (event) { 
    $(".invisible").show();
  });
  $(".invisible").click(function (event) {
     $(".invisible").hide();
    }); 
});*/

$(document).ready(function () { 
  $(".invisible").hide();
  $('#click').click(function (event) { 
    $(".invisible").show();
  });
  $(".close").click(function (event) {
     $(".invisible").hide();
    }); 
});

$(document).ready(function () { 
  $(".invisible").hide();
  $('#click-botton').click(function (event) { 
    $(".invisible").show();
  });
  $(".close").click(function (event) {
     $(".invisible").hide();
    }); 
});

/*CLICK GLOBE*/
$(function(){
  $('i.globe').on('click', function(){
    $('.society_icons').slideToggle();
  });
});


/*$(document).ready(function () { 
  alert('aaaaaa!');
 });*/

