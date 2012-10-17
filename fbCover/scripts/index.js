
HEADER=["<span>Upload</span> your picture:","<span>Customize</span> your cover:","<span>Save</span> your cover:","<span>Last</span> Timeline covers:","<span>Best</span> Timline covers rating:","<span>Random</span> Timline covers:"];
var currentPos = 0;
var NumberOfDivs = 0;
function resetArrowsOperation(){
    if(currentPos == 0)
        jQuery('#left_arrow').animate({
            'opacity':0
        },200);
    if(currentPos == NumberOfDivs-1 )
        jQuery('#right_arrow').animate({
            'opacity':0
        },200);
    if(currentPos > 0)
        jQuery('#left_arrow').animate({
            'opacity':100
        },200);
    if(currentPos < NumberOfDivs-1 )
        jQuery('#right_arrow').animate({
            'opacity':100
        },200);
    jQuery("#header_bg").html(HEADER[currentPos]);

    jQuery('#uploading_menu > li > a').removeClass('clicked');
    jQuery("#uploading_menu > li:nth-child("+(1+currentPos)+") a").addClass('clicked');
}


jQuery(document).ready(function(){

    NumberOfDivs = jQuery('#slider_horizontal_container').children('div').size();
    jQuery('#slider_horizontal_container').css('width',NumberOfDivs*850); 

    resetArrowsOperation();

    jQuery(".gallery_image").hoverIntent({
        over: function(){
            jQuery(this).find('.gallery_image_img_options').animate({
                'opacity': 1
            },300);
            jQuery(this).css({
                'background-color':'#d5d5d5' ,
                'border':'1px solid #ffffff'
            }
            );
        },
        timeout:0,
        interval:50,
        sensitivity:10,
        out: function(){
            jQuery(this).find('.gallery_image_img_options').animate({
                'opacity': 0
            },400);
            jQuery(this).css({
                'background-color':'transparent' ,
                'border-color':'transparent'
            }
            );

        }
    });

    jQuery("#slider_save img").hoverIntent({
        over: function(){
            jQuery(this).next('h2').animate({
                'opacity': 0.8
            },350);
        },
        timeout:500,
        interval:50,
        sensitivity:10,
        out: function(){
             jQuery(this).next('h2').animate({
                'opacity': 0
            },450);

        }
    });




    jQuery('#customize_form_styles > span').click(function(){
        jQuery('#customize_form_styles > span').removeClass('selected');
        jQuery(this).addClass('selected');
    });

    jQuery('.rating > span').mouseover(function(){
        var number = parseInt(jQuery(this).attr('title'));
        jQuery('.rating > span').css('background-position','bottom center');
        jQuery('.rating > span').each(function(){
            if(jQuery(this).attr('title') <= number)
                jQuery(this).css('background-position','top center');
        })
    });
    jQuery('.rating ').mouseout(function(){
        jQuery('.rating > span').css('background-position','bottom center');
    });

    jQuery('#left_arrow').click(function(){
        if(currentPos > 0){
            --currentPos;
            jQuery('#slider_horizontal_container').animate({
                'marginLeft' : (currentPos*-850)
            },500,resetArrowsOperation());
        }
    });

    jQuery('#right_arrow').click(function(){
        if(currentPos < NumberOfDivs-1){
            ++currentPos;
            jQuery('#slider_horizontal_container').animate({
                'marginLeft' : (currentPos*-850)
            },500,resetArrowsOperation() );
        }
    });

    jQuery('#uploading_menu > li > a').click(function(){
        currentPos = parseInt(jQuery(this).attr('href'));
        jQuery('#uploading_menu > li > a').removeClass('clicked');
        jQuery(this).addClass('clicked');
        jQuery('#slider_horizontal_container').animate({
            'marginLeft' : (currentPos*-850)
        },500,resetArrowsOperation() );
        this.blur();
        return false;
    });
});