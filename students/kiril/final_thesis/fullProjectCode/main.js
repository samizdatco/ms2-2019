var t0 = 'A visual exploration of the annual path and travel efficiency for the top 30 women tennis players on the WTA tour for 2018.'

var t1 = 'The Big Picture'

var t2 = 'The Weekly Picture'

var t3 = 'Annual Path and Efficiency by Player'

var t4 = 'Conclusion'

$(document).ready(function(){

        $("#courtbutton").hide();
        $('#headlineForChart').text(t0);
        $('#tile1').hide();
        $('#tile2').hide();
        $('#tile3').hide();
        $('#tile4').hide();
        $('#footnote1').hide();
        

        // $('.court__nml--left').on('click', function(){
        
        // });

        $('.court__ad--left').on('click', function(){
       
        $('.wrapper').hide();
        $("#courtbutton").show();
        $('#headlineForChart').text(t1);
        $('#tile1').show();
        $('#tile2').hide();
        $('#tile3').hide();
        $('#tile4').hide();
        $('#footnote1').show();
        });

        $('.court__dc--left').on('click', function(){
       
        $('.wrapper').hide();
        $("#courtbutton").show();
        $('#headlineForChart').text(t2);
        $('#tile1').hide();
        $('#tile2').show();
        $('#legendrect0').show();
        $('#legendtext0').show();
        $('#legendrect1').hide();
        $('#legendtext1').hide();
        $('#legendrect2').hide();
        $('#legendtext2').hide();
        $('svg').hide();
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('.recttext').text("");
        $('#tile3').hide();
        $('#tile4').hide();
        $('#footnote1').show();
        });

        $('.court__ad--right').on('click', function(){
      
   
        $('.wrapper').hide();
        $("#courtbutton").show();
        $('#headlineForChart').text(t3);
        $('#tile1').hide();
        $('#tile2').hide();
        $('#tile3').show();
        $('.playerList').removeAttr('style');
        $('#chartInTile3').empty();
        $('#chartInTile3').show();
        $('#tableInTile3').css("overflow", "hidden");
        $('.weekh3').hide();
        $('.zz').html("");
        $('.yy').html("");
        $('.zz').removeAttr('style');
        $('.yy').removeAttr('style');
        $('#tile4').hide();
        $('#footnote1').show();
        
        $('#player0').on('click', function(){
        $('.playerList').removeAttr('style');
        $('#chartInTile3').empty();
        $('#chartInTile3').show();       
        drawchartInTile3("");
        $('#tableInTile3').css("overflow", "hidden");
        $('.weekh3').hide();
        $('.zz').html("");
        $('.yy').html("");
        $('.zz').removeAttr('style');
        $('.yy').removeAttr('style');
        });
        
        $('#player1').on('click', function(){
        $('.playerList').removeAttr('style');
        $('#player1').css({"color":"#8E388E","font-size": "1.5vw","font-weight":"bold"});        
        $('#chartInTile3').empty();
        $('#chartInTile3').show();       
        drawchartInTile3("Simona Halep");
        $('#tableInTile3').css("overflow", "scroll");
        $('.weekh3').show();
        $('.zz').html("");
        $('.yy').html("");
        $('.zz').removeAttr('style');
        $('.yy').removeAttr('style');
        $('#pt200').html("Points Earned");
        $('#pt101').html("&nbsp;&nbsp;Shenzhen, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt201').html("&nbsp;&nbsp;280").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.28)"});
        $('#pt103').html("&nbsp;&nbsp;Melbourne, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt203').html("&nbsp;&nbsp;1300").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,1.3)"});
        $('#pt108').html("&nbsp;&nbsp;Doha, Qatar").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt208').html("&nbsp;&nbsp;350").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.35)"});
        $('#pt111').html("&nbsp;&nbsp;Indian Wells, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt211').html("&nbsp;&nbsp;390").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.39)"});
        $('#pt113').html("&nbsp;&nbsp;Miami, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt213').html("&nbsp;&nbsp;65").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.065)"});
        $('#pt118').html("&nbsp;&nbsp;Stuttgart, Germany").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt218').html("&nbsp;&nbsp;100").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.1)"});
        $('#pt120').html("&nbsp;&nbsp;Madrid, Spain").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt220').html("&nbsp;&nbsp;215").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.215)"});
        $('#pt121').html("&nbsp;&nbsp;Rome, Italy").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt221').html("&nbsp;&nbsp;585").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.585)"});
        $('#pt123').html("&nbsp;&nbsp;Paris, France").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt223').html("&nbsp;&nbsp;2000").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,2)"});
        $('#pt129').html("&nbsp;&nbsp;Wimbledon, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt229').html("&nbsp;&nbsp;130").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.13)"});
        $('#pt134').html("&nbsp;&nbsp;Montreal, Canada").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt234').html("&nbsp;&nbsp;900").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.9)"});
        $('#pt135').html("&nbsp;&nbsp;Cincinnati, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt235').html("&nbsp;&nbsp;585").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.585)"});
        $('#pt137').html("&nbsp;&nbsp;New York, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt237').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt141').html("&nbsp;&nbsp;Wuhan, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt241').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt142').html("&nbsp;&nbsp;Beijing, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt242').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt103').css({"background":"#548B54"})
        $('#pt123').css({"background":"#548B54"})
        $('#pt129').css({"background":"#548B54"})
        $('#pt137').css({"background":"#548B54"})
        });
        
        $('#player2').on('click', function(){
        $('.playerList').removeAttr('style');
        $('#player2').css({"color":"#8E388E","font-size": "1.5vw","font-weight":"bold"});
        $('#chartInTile3').empty();
        $('#chartInTile3').show();       
        drawchartInTile3("Angelique Kerber");
        $('#tableInTile3').css("overflow", "scroll");
        $('.weekh3').show();
        $('.zz').html("");
        $('.yy').html("");
        $('.zz').removeAttr('style');
        $('.yy').removeAttr('style');
        $('#pt200').html("Points Earned");
        $('#pt102').html("&nbsp;&nbsp;Sydney, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt202').html("&nbsp;&nbsp;470").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.47)"});
        $('#pt103').html("&nbsp;&nbsp;Melbourne, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt203').html("&nbsp;&nbsp;780").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.78)"});
        $('#pt108').html("&nbsp;&nbsp;Doha, Qatar").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt208').html("&nbsp;&nbsp;190").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.19)"});
        $('#pt109').html("&nbsp;&nbsp;Dubai, UAE").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt209').html("&nbsp;&nbsp;185").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.185)"});
        $('#pt111').html("&nbsp;&nbsp;Indian Wells, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt211').html("&nbsp;&nbsp;215").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.215)"});
        $('#pt113').html("&nbsp;&nbsp;Miami, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt213').html("&nbsp;&nbsp;215").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.215)"});
        $('#pt118').html("&nbsp;&nbsp;Stuttgart, Germany").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt218').html("&nbsp;&nbsp;55").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.055)"});
        $('#pt121').html("&nbsp;&nbsp;Rome, Italy").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt221').html("&nbsp;&nbsp;190").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.19)"});
        $('#pt123').html("&nbsp;&nbsp;Paris, France").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt223').html("&nbsp;&nbsp;430").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.43)"});
        $('#pt127').html("&nbsp;&nbsp;Mallorca, Spain").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt227').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt128').html("&nbsp;&nbsp;Eastbourne, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt228').html("&nbsp;&nbsp;185").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.185)"});
        $('#pt129').html("&nbsp;&nbsp;Wimbledon, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt229').html("&nbsp;&nbsp;2000").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,2)"});
        $('#pt134').html("&nbsp;&nbsp;Montreal, Canada").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt234').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt135').html("&nbsp;&nbsp;Cincinnati, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt235').html("&nbsp;&nbsp;105").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.105)"});
        $('#pt137').html("&nbsp;&nbsp;New York, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt237').html("&nbsp;&nbsp;130").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.13)"});
        $('#pt141').html("&nbsp;&nbsp;Wuhan, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt241').html("&nbsp;&nbsp;105").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.105)"});
        $('#pt142').html("&nbsp;&nbsp;Beijing, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt242').html("&nbsp;&nbsp;120").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.12)"});
        $('#pt145').html("&nbsp;&nbsp;Singapore, Singapore").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt245').html("&nbsp;&nbsp;500").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.5)"});
        $('#pt103').css({"background":"#548B54"})
        $('#pt123').css({"background":"#548B54"})
        $('#pt129').css({"background":"#548B54"})
        $('#pt137').css({"background":"#548B54"})
        });
        
        $('#player3').on('click', function(){
        $('.playerList').removeAttr('style');
        $('#player3').css({"color":"#8E388E","font-size": "1.5vw","font-weight":"bold"});
        $('#chartInTile3').empty();
        $('#chartInTile3').show();       
        drawchartInTile3("Caroline Wozniacki");
        $('#tableInTile3').css("overflow", "scroll");
        $('.weekh3').show();
        $('.zz').html("");
        $('.yy').html("");
        $('.zz').removeAttr('style');
        $('.yy').removeAttr('style');
        $('#pt200').html("Points Earned");
        $('#pt101').html("&nbsp;&nbsp;Auckland, New Zealand").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt201').html("&nbsp;&nbsp;180").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.18)"});
        $('#pt103').html("&nbsp;&nbsp;Melbourne, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt203').html("&nbsp;&nbsp;2000").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,2)"});
        $('#pt106').html("&nbsp;&nbsp;St. Petersburg, Russia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt206').html("&nbsp;&nbsp;100").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.1)"});
        $('#pt108').html("&nbsp;&nbsp;Doha, Qatar").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt208').html("&nbsp;&nbsp;350").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.35)"});
        $('#pt111').html("&nbsp;&nbsp;Indian Wells, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt211').html("&nbsp;&nbsp;120").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.12)"});
        $('#pt113').html("&nbsp;&nbsp;Miami, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt213').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt118').html("&nbsp;&nbsp;Istanbul, Turkey").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt218').html("&nbsp;&nbsp;60").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.06)"});
        $('#pt120').html("&nbsp;&nbsp;Madrid, Spain").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt220').html("&nbsp;&nbsp;120").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.12)"});
        $('#pt121').html("&nbsp;&nbsp;Rome, Italy").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt221').html("&nbsp;&nbsp;190").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.19)"});
        $('#pt123').html("&nbsp;&nbsp;Paris, France").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt223').html("&nbsp;&nbsp;240").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.24)"});
        $('#pt128').html("&nbsp;&nbsp;Eastbourne, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt228').html("&nbsp;&nbsp;470").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.47)"});
        $('#pt129').html("&nbsp;&nbsp;Wimbledon, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt229').html("&nbsp;&nbsp;70").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.07)"});
        $('#pt134').html("&nbsp;&nbsp;Montreal, Canada").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt234').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt135').html("&nbsp;&nbsp;Cincinnati, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt235').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt137').html("&nbsp;&nbsp;New York, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt237').html("&nbsp;&nbsp;70").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.07)"});
        $('#pt140').html("&nbsp;&nbsp;Tokyo, Japan").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt240').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt141').html("&nbsp;&nbsp;Wuhan, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt241').html("&nbsp;&nbsp;105").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.105)"});
        $('#pt142').html("&nbsp;&nbsp;Beijing, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt242').html("&nbsp;&nbsp;1000").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,1)"});
        $('#pt145').html("&nbsp;&nbsp;Singapore, Singapore").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt245').html("&nbsp;&nbsp;500").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.5)"});
        $('#pt103').css({"background":"#548B54"})
        $('#pt123').css({"background":"#548B54"})
        $('#pt129').css({"background":"#548B54"})
        $('#pt137').css({"background":"#548B54"})
        });
        
        $('#player4').on('click', function(){
        $('.playerList').removeAttr('style');
        $('#player4').css({"color":"#8E388E","font-size": "1.5vw","font-weight":"bold"});
        $('#chartInTile3').empty();
        $('#chartInTile3').show();       
        drawchartInTile3("Elina Svitolina");
        $('#tableInTile3').css("overflow", "scroll");
        $('.weekh3').show();
        $('.zz').html("");
        $('.yy').html("");
        $('.zz').removeAttr('style');
        $('.yy').removeAttr('style');
        $('#pt200').html("Points Earned");
        $('#pt101').html("&nbsp;&nbsp;Brisbane, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt201').html("&nbsp;&nbsp;470").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.47)"});
        $('#pt103').html("&nbsp;&nbsp;Melbourne, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt203').html("&nbsp;&nbsp;430").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.43)"});
        $('#pt108').html("&nbsp;&nbsp;Doha, Qatar").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt208').html("&nbsp;&nbsp;105").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.105)"});
        $('#pt109').html("&nbsp;&nbsp;Dubai, UAE").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt209').html("&nbsp;&nbsp;470").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.47)"});
        $('#pt111').html("&nbsp;&nbsp;Indian Wells, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt211').html("&nbsp;&nbsp;65").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.065)"});
        $('#pt113').html("&nbsp;&nbsp;Miami, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt213').html("&nbsp;&nbsp;215").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.215)"});
        $('#pt118').html("&nbsp;&nbsp;Stuttgart, Germany").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt218').html("&nbsp;&nbsp;100").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.1)"});
        $('#pt120').html("&nbsp;&nbsp;Madrid, Spain").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt220').html("&nbsp;&nbsp;65").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.065)"});
        $('#pt121').html("&nbsp;&nbsp;Rome, Italy").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt221').html("&nbsp;&nbsp;900").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.9)"});
        $('#pt123').html("&nbsp;&nbsp;Paris, France").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt223').html("&nbsp;&nbsp;130").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.13)"});
        $('#pt127').html("&nbsp;&nbsp;Birmingham, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt227').html("&nbsp;&nbsp;100").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.1)"});
        $('#pt129').html("&nbsp;&nbsp;Wimbledon, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt229').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt134').html("&nbsp;&nbsp;Montreal, Canada").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt234').html("&nbsp;&nbsp;350").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.35)"});
        $('#pt135').html("&nbsp;&nbsp;Cincinnati, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt235').html("&nbsp;&nbsp;190").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.19)"});
        $('#pt137').html("&nbsp;&nbsp;New York, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt237').html("&nbsp;&nbsp;240").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.24)"});
        $('#pt141').html("&nbsp;&nbsp;Wuhan, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt241').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt142').html("&nbsp;&nbsp;Beijing, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt242').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt143').html("&nbsp;&nbsp;Hong Kong, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt243').html("&nbsp;&nbsp;60").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.06)"});
        $('#pt145').html("&nbsp;&nbsp;Singapore, Singapore").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt245').html("&nbsp;&nbsp;1500").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,1.5)"});
        $('#pt103').css({"background":"#548B54"})
        $('#pt123').css({"background":"#548B54"})
        $('#pt129').css({"background":"#548B54"})
        $('#pt137').css({"background":"#548B54"})
        });
        
        $('#player5').on('click', function(){
        $('.playerList').removeAttr('style');
        $('#player5').css({"color":"#8E388E","font-size": "1.5vw","font-weight":"bold"});
        $('#chartInTile3').empty();
        $('#chartInTile3').show();       
        drawchartInTile3("Naomi Osaka");
        $('#tableInTile3').css("overflow", "scroll");
        $('.weekh3').show();
        $('.zz').html("");
        $('.yy').html("");
        $('.zz').removeAttr('style');
        $('.yy').removeAttr('style');
        $('#pt200').html("Points Earned");
        $('#pt102').html("&nbsp;&nbsp;Hobart, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt202').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt103').html("&nbsp;&nbsp;Melbourne, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt203').html("&nbsp;&nbsp;240").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.24)"});
        $('#pt108').html("&nbsp;&nbsp;Doha, Qatar").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt208').html("&nbsp;&nbsp;90").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.09)"});
        $('#pt109').html("&nbsp;&nbsp;Dubai, UAE").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt209').html("&nbsp;&nbsp;100").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.1)"});
        $('#pt111').html("&nbsp;&nbsp;Indian Wells, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt211').html("&nbsp;&nbsp;1000").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,1)"});
        $('#pt113').html("&nbsp;&nbsp;Miami, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt213').html("&nbsp;&nbsp;35").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.035)"});
        $('#pt115').html("&nbsp;&nbsp;Charleston, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt215').html("&nbsp;&nbsp;55").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.055)"});
        $('#pt120').html("&nbsp;&nbsp;Madrid, Spain").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt220').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt121').html("&nbsp;&nbsp;Rome, Italy").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt221').html("&nbsp;&nbsp;60").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.06)"});
        $('#pt123').html("&nbsp;&nbsp;Paris, France").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt223').html("&nbsp;&nbsp;130").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.13)"});
        $('#pt126').html("&nbsp;&nbsp;Nottingham, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt226').html("&nbsp;&nbsp;110").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.11)"});
        $('#pt127').html("&nbsp;&nbsp;Birmingham, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt227').html("&nbsp;&nbsp;55").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.055)"});
        $('#pt129').html("&nbsp;&nbsp;Wimbledon, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt229').html("&nbsp;&nbsp;130").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.13)"});
        $('#pt133').html("&nbsp;&nbsp;Washington, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt233').html("&nbsp;&nbsp;30").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.03)"});
        $('#pt134').html("&nbsp;&nbsp;Montreal, Canada").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt234').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt137').html("&nbsp;&nbsp;New York, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt237').html("&nbsp;&nbsp;2000").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,2)"});
        $('#pt140').html("&nbsp;&nbsp;Tokyo, Japan").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt240').html("&nbsp;&nbsp;305").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.305)"});
        $('#pt142').html("&nbsp;&nbsp;Beijing, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt242').html("&nbsp;&nbsp;390").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.39)"});
        $('#pt145').html("&nbsp;&nbsp;Singapore, Singapore").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt245').html("&nbsp;&nbsp;375").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.375)"});
        $('#pt103').css({"background":"#548B54"})
        $('#pt123').css({"background":"#548B54"})
        $('#pt129').css({"background":"#548B54"})
        $('#pt137').css({"background":"#548B54"})
        });
        
        $('#player6').on('click', function(){
        $('.playerList').removeAttr('style');
        $('#player6').css({"color":"#8E388E","font-size": "1.5vw","font-weight":"bold"});
        $('#chartInTile3').empty();
        $('#chartInTile3').show();       
        drawchartInTile3("Sloane Stephens");
        $('#tableInTile3').css("overflow", "scroll");
        $('.weekh3').show();
        $('.zz').html("");
        $('.yy').html("");
        $('.zz').removeAttr('style');
        $('.yy').removeAttr('style');
        $('#pt200').html("Points Earned");
        $('#pt102').html("&nbsp;&nbsp;Sydney, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt202').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt103').html("&nbsp;&nbsp;Melbourne, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt203').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt110').html("&nbsp;&nbsp;Acapulco, Mexico").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt210').html("&nbsp;&nbsp;60").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.06)"});
        $('#pt111').html("&nbsp;&nbsp;Indian Wells, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt211').html("&nbsp;&nbsp;65").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.065)"});
        $('#pt113').html("&nbsp;&nbsp;Miami, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt213').html("&nbsp;&nbsp;1000").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,1)"});
        $('#pt118').html("&nbsp;&nbsp;Stuttgart, Germany").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt218').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt120').html("&nbsp;&nbsp;Madrid, Spain").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt220').html("&nbsp;&nbsp;120").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.12)"});
        $('#pt121').html("&nbsp;&nbsp;Rome, Italy").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt221').html("&nbsp;&nbsp;105").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.105)"});
        $('#pt122').html("&nbsp;&nbsp;Nuernberg, Germany").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt222').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt123').html("&nbsp;&nbsp;Paris, France").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt223').html("&nbsp;&nbsp;1300").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,1.3)"});
        $('#pt129').html("&nbsp;&nbsp;Wimbledon, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt229').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt133').html("&nbsp;&nbsp;Washington, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt233').html("&nbsp;&nbsp;30").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.03)"});
        $('#pt134').html("&nbsp;&nbsp;Montreal, Canada").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt234').html("&nbsp;&nbsp;585").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.585)"});
        $('#pt135').html("&nbsp;&nbsp;Cincinnati, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt235').html("&nbsp;&nbsp;105").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.105)"});
        $('#pt137').html("&nbsp;&nbsp;New York, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt237').html("&nbsp;&nbsp;430").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.43)"});
        $('#pt140').html("&nbsp;&nbsp;Tokyo, Japan").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt240').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt141').html("&nbsp;&nbsp;Wuhan, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt241').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt142').html("&nbsp;&nbsp;Beijing, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt242').html("&nbsp;&nbsp;120").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.12)"});
        $('#pt144').html("&nbsp;&nbsp;Moscow, Russia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt244').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt145').html("&nbsp;&nbsp;Singapore, Singapore").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt245').html("&nbsp;&nbsp;1080").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,1.08)"});
        $('#pt103').css({"background":"#548B54"})
        $('#pt123').css({"background":"#548B54"})
        $('#pt129').css({"background":"#548B54"})
        $('#pt137').css({"background":"#548B54"})
        });
        
        $('#player7').on('click', function(){
        $('.playerList').removeAttr('style');
        $('#player7').css({"color":"#8E388E","font-size": "1.5vw","font-weight":"bold"});
        $('#chartInTile3').empty();
        $('#chartInTile3').show();       
        drawchartInTile3("Petra Kvitova");
        $('#tableInTile3').css("overflow", "scroll");
        $('.weekh3').show();
        $('.zz').html("");
        $('.yy').html("");
        $('.zz').removeAttr('style');
        $('.yy').removeAttr('style');
        $('#pt200').html("Points Earned");
        $('#pt102').html("&nbsp;&nbsp;Sydney, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt202').html("&nbsp;&nbsp;55").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.055)"});
        $('#pt103').html("&nbsp;&nbsp;Melbourne, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt203').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt106').html("&nbsp;&nbsp;St. Petersburg, Russia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt206').html("&nbsp;&nbsp;470").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.47)"});
        $('#pt108').html("&nbsp;&nbsp;Doha, Qatar").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt208').html("&nbsp;&nbsp;900").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.9)"});
        $('#pt111').html("&nbsp;&nbsp;Indian Wells, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt211').html("&nbsp;&nbsp;65").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.065)"});
        $('#pt113').html("&nbsp;&nbsp;Miami, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt213').html("&nbsp;&nbsp;120").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.12)"});
        $('#pt115').html("&nbsp;&nbsp;Charleston, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt215').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt118').html("&nbsp;&nbsp;Stuttgart, Germany").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt218').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt119').html("&nbsp;&nbsp;Prague, Czechia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt219').html("&nbsp;&nbsp;280").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.28)"});
        $('#pt120').html("&nbsp;&nbsp;Madrid, Spain").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt220').html("&nbsp;&nbsp;1000").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,1)"});
        $('#pt123').html("&nbsp;&nbsp;Paris, France").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt223').html("&nbsp;&nbsp;130").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.13)"});
        $('#pt127').html("&nbsp;&nbsp;Birmingham, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt227').html("&nbsp;&nbsp;470").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.47)"});
        $('#pt128').html("&nbsp;&nbsp;Eastbourne, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt228').html("&nbsp;&nbsp;55").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.055)"});
        $('#pt129').html("&nbsp;&nbsp;Wimbledon, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt229').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt134').html("&nbsp;&nbsp;Montreal, Canada").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt234').html("&nbsp;&nbsp;105").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.105)"});
        $('#pt135').html("&nbsp;&nbsp;Cincinnati, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt235').html("&nbsp;&nbsp;350").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.35)"});
        $('#pt136').html("&nbsp;&nbsp;New Haven, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt236').html("&nbsp;&nbsp;100").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.1)"});
        $('#pt137').html("&nbsp;&nbsp;New York, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt237').html("&nbsp;&nbsp;130").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.13)"});
        $('#pt141').html("&nbsp;&nbsp;Wuhan, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt241').html("&nbsp;&nbsp;105").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.105)"});
        $('#pt142').html("&nbsp;&nbsp;Beijing, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt242').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt145').html("&nbsp;&nbsp;Singapore, Singapore").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt245').html("&nbsp;&nbsp;375").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.375)"});
        $('#pt103').css({"background":"#548B54"})
        $('#pt123').css({"background":"#548B54"})
        $('#pt129').css({"background":"#548B54"})
        $('#pt137').css({"background":"#548B54"})
        });
        
        $('#player8').on('click', function(){
        $('.playerList').removeAttr('style');
        $('#player8').css({"color":"#8E388E","font-size": "1.5vw","font-weight":"bold"});
        $('#chartInTile3').empty();
        $('#chartInTile3').show();       
        drawchartInTile3("Karolina Pliskova");
        $('#tableInTile3').css("overflow", "scroll");
        $('.weekh3').show();
        $('.zz').html("");
        $('.yy').html("");
        $('.zz').removeAttr('style');
        $('.yy').removeAttr('style');
        $('#pt200').html("Points Earned");
        $('#pt101').html("&nbsp;&nbsp;Brisbane, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt201').html("&nbsp;&nbsp;185").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.185)"});
        $('#pt103').html("&nbsp;&nbsp;Melbourne, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt203').html("&nbsp;&nbsp;430").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.43)"});
        $('#pt108').html("&nbsp;&nbsp;Doha, Qatar").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt208').html("&nbsp;&nbsp;105").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.105)"});
        $('#pt109').html("&nbsp;&nbsp;Dubai, UAE").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt209').html("&nbsp;&nbsp;100").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.1)"});
        $('#pt111').html("&nbsp;&nbsp;Indian Wells, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt211').html("&nbsp;&nbsp;215").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.215)"});
        $('#pt113').html("&nbsp;&nbsp;Miami, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt213').html("&nbsp;&nbsp;215").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.215)"});
        $('#pt118').html("&nbsp;&nbsp;Stuttgart, Germany").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt218').html("&nbsp;&nbsp;470").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.47)"});
        $('#pt120').html("&nbsp;&nbsp;Madrid, Spain").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt220').html("&nbsp;&nbsp;390").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.39)"});
        $('#pt121').html("&nbsp;&nbsp;Rome, Italy").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt221').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt123').html("&nbsp;&nbsp;Paris, France").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt223').html("&nbsp;&nbsp;130").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.13)"});
        $('#pt127').html("&nbsp;&nbsp;Birmingham, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt227').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt128').html("&nbsp;&nbsp;Eastbourne, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt228').html("&nbsp;&nbsp;100").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.1)"});
        $('#pt129').html("&nbsp;&nbsp;Wimbledon, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt229').html("&nbsp;&nbsp;240").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.24)"});
        $('#pt134').html("&nbsp;&nbsp;Montreal, Canada").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt234').html("&nbsp;&nbsp;60").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.06)"});
        $('#pt135').html("&nbsp;&nbsp;Cincinnati, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt235').html("&nbsp;&nbsp;60").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.06)"});
        $('#pt136').html("&nbsp;&nbsp;New Haven, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt236').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt137').html("&nbsp;&nbsp;New York, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt237').html("&nbsp;&nbsp;430").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.43)"});
        $('#pt140').html("&nbsp;&nbsp;Tokyo, Japan").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt240').html("&nbsp;&nbsp;470").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.47)"});
        $('#pt141').html("&nbsp;&nbsp;Wuhan, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt241').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt142').html("&nbsp;&nbsp;Beijing, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt242').html("&nbsp;&nbsp;120").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.12)"});
        $('#pt143').html("&nbsp;&nbsp;Tianjin, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt243').html("&nbsp;&nbsp;180").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.18)"});
        $('#pt144').html("&nbsp;&nbsp;Moscow, Russia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt244').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt145').html("&nbsp;&nbsp;Singapore, Singapore").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt245').html("&nbsp;&nbsp;625").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.625)"});
        $('#pt103').css({"background":"#548B54"})
        $('#pt123').css({"background":"#548B54"})
        $('#pt129').css({"background":"#548B54"})
        $('#pt137').css({"background":"#548B54"})
        });
        
        $('#player9').on('click', function(){
        $('.playerList').removeAttr('style');
        $('#player9').css({"color":"#8E388E","font-size": "1.5vw","font-weight":"bold"});
        $('#chartInTile3').empty();
        $('#chartInTile3').show();       
        drawchartInTile3("Kiki Bertens");
        $('#tableInTile3').css("overflow", "scroll");
        $('.weekh3').show();
        $('.zz').html("");
        $('.yy').html("");
        $('.zz').removeAttr('style');
        $('.yy').removeAttr('style');
        $('#pt200').html("Points Earned");
        $('#pt101').html("&nbsp;&nbsp;Brisbane, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt201').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt102').html("&nbsp;&nbsp;Sydney, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt202').html("&nbsp;&nbsp;55").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.055)"});
        $('#pt103').html("&nbsp;&nbsp;Melbourne, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt203').html("&nbsp;&nbsp;130").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.13)"});
        $('#pt106').html("&nbsp;&nbsp;St. Petersburg, Russia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt206').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt109').html("&nbsp;&nbsp;Dubai, UAE").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt209').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt111').html("&nbsp;&nbsp;Indian Wells, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt211').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt113').html("&nbsp;&nbsp;Miami, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt213').html("&nbsp;&nbsp;65").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.065)"});
        $('#pt115').html("&nbsp;&nbsp;Charleston, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt215').html("&nbsp;&nbsp;470").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.47)"});
        $('#pt118').html("&nbsp;&nbsp;Stuttgart, Germany").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt218').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt120').html("&nbsp;&nbsp;Madrid, Spain").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt220').html("&nbsp;&nbsp;650").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.65)"});
        $('#pt121').html("&nbsp;&nbsp;Rome, Italy").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt221').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt122').html("&nbsp;&nbsp;Nuernberg, Germany").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt222').html("&nbsp;&nbsp;60").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.06)"});
        $('#pt123').html("&nbsp;&nbsp;Paris, France").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt223').html("&nbsp;&nbsp;130").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.13)"});
        $('#pt126').html("&nbsp;&nbsp;Den Bosch, Holland").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt226').html("&nbsp;&nbsp;30").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.03)"});
        $('#pt128').html("&nbsp;&nbsp;Eastbourne, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt228').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt129').html("&nbsp;&nbsp;Wimbledon, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt229').html("&nbsp;&nbsp;430").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.43)"});
        $('#pt134').html("&nbsp;&nbsp;Montreal, Canada").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt234').html("&nbsp;&nbsp;190").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.19)"});
        $('#pt135').html("&nbsp;&nbsp;Cincinnati, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt235').html("&nbsp;&nbsp;900").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.9)"});
        $('#pt137').html("&nbsp;&nbsp;New York, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt237').html("&nbsp;&nbsp;130").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.13)"});
        $('#pt140').html("&nbsp;&nbsp;Seoul, Korea").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt240').html("&nbsp;&nbsp;280").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.28)"});
        $('#pt141').html("&nbsp;&nbsp;Wuhan, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt241').html("&nbsp;&nbsp;60").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.06)"});
        $('#pt142').html("&nbsp;&nbsp;Beijing, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt242').html("&nbsp;&nbsp;120").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.12)"});
        $('#pt143').html("&nbsp;&nbsp;Linz, Austria").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt243').html("&nbsp;&nbsp;30").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.03)"});
        $('#pt144').html("&nbsp;&nbsp;Moscow, Russia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt244').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt145').html("&nbsp;&nbsp;Singapore, Singapore").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt245').html("&nbsp;&nbsp;625").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.625)"});
        $('#pt103').css({"background":"#548B54"})
        $('#pt123').css({"background":"#548B54"})
        $('#pt129').css({"background":"#548B54"})
        $('#pt137').css({"background":"#548B54"})
        });
        
        $('#player10').on('click', function(){
        $('.playerList').removeAttr('style');
        $('#player10').css({"color":"#8E388E","font-size": "1.5vw","font-weight":"bold"});
        $('#chartInTile3').empty();
        $('#chartInTile3').show();       
        drawchartInTile3("Daria Kasatkina");
        $('#tableInTile3').css("overflow", "scroll");
        $('.weekh3').show();
        $('.zz').html("");
        $('.yy').html("");
        $('.zz').removeAttr('style');
        $('.yy').removeAttr('style');
        $('#pt200').html("Points Earned");
        $('#pt101').html("&nbsp;&nbsp;Brisbane, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt201').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt102').html("&nbsp;&nbsp;Sydney, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt202').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt103').html("&nbsp;&nbsp;Melbourne, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt203').html("&nbsp;&nbsp;70").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.07)"});
        $('#pt106').html("&nbsp;&nbsp;St. Petersburg, Russia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt206').html("&nbsp;&nbsp;185").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.185)"});
        $('#pt108').html("&nbsp;&nbsp;Doha, Qatar").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt208').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt109').html("&nbsp;&nbsp;Dubai, UAE").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt209').html("&nbsp;&nbsp;305").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.305)"});
        $('#pt111').html("&nbsp;&nbsp;Indian Wells, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt211').html("&nbsp;&nbsp;650").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.65)"});
        $('#pt113').html("&nbsp;&nbsp;Miami, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt213').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt115').html("&nbsp;&nbsp;Charleston, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt215').html("&nbsp;&nbsp;100").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.1)"});
        $('#pt118').html("&nbsp;&nbsp;Stuttgart, Germany").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt218').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt119').html("&nbsp;&nbsp;Prague, Czechia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt219').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt120').html("&nbsp;&nbsp;Madrid, Spain").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt220').html("&nbsp;&nbsp;215").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.215)"});
        $('#pt121').html("&nbsp;&nbsp;Rome, Italy").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt221').html("&nbsp;&nbsp;105").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.105)"});
        $('#pt123').html("&nbsp;&nbsp;Paris, France").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt223').html("&nbsp;&nbsp;430").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.43)"});
        $('#pt127').html("&nbsp;&nbsp;Birmingham, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt227').html("&nbsp;&nbsp;55").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.055)"});
        $('#pt128').html("&nbsp;&nbsp;Eastbourne, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt228').html("&nbsp;&nbsp;100").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.1)"});
        $('#pt129').html("&nbsp;&nbsp;Wimbledon, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt229').html("&nbsp;&nbsp;430").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.43)"});
        $('#pt132').html("&nbsp;&nbsp;Moscow, Russia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt232').html("&nbsp;&nbsp;30").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.03)"});
        $('#pt134').html("&nbsp;&nbsp;Montreal, Canada").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt234').html("&nbsp;&nbsp;60").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.06)"});
        $('#pt135').html("&nbsp;&nbsp;Cincinnati, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt235').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt137').html("&nbsp;&nbsp;New York, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt237').html("&nbsp;&nbsp;70").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.07)"});
        $('#pt141').html("&nbsp;&nbsp;Wuhan, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt241').html("&nbsp;&nbsp;105").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.105)"});
        $('#pt142').html("&nbsp;&nbsp;Beijing, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt242').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt144').html("&nbsp;&nbsp;Moscow, Russia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt244').html("&nbsp;&nbsp;470").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.47)"});
        $('#pt146').html("&nbsp;&nbsp;Zhuhai, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt246').html("&nbsp;&nbsp;160").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.16)"});
        $('#pt103').css({"background":"#548B54"})
        $('#pt123').css({"background":"#548B54"})
        $('#pt129').css({"background":"#548B54"})
        $('#pt137').css({"background":"#548B54"})
        });
        
        $('#player11').on('click', function(){
        $('.playerList').removeAttr('style');
        $('#player11').css({"color":"#8E388E","font-size": "1.5vw","font-weight":"bold"});
        $('#chartInTile3').empty();
        $('#chartInTile3').show();       
        drawchartInTile3("Aryna Sabalenka");
        $('#tableInTile3').css("overflow", "scroll");
        $('.weekh3').show();
        $('.zz').html("");
        $('.yy').html("");
        $('.zz').removeAttr('style');
        $('.yy').removeAttr('style');
        $('#pt200').html("Points Earned");
        $('#pt101').html("&nbsp;&nbsp;Shenzhen, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt201').html("&nbsp;&nbsp;60").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.06)"});
        $('#pt102').html("&nbsp;&nbsp;Hobart, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt202').html("&nbsp;&nbsp;60").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.06)"});
        $('#pt103').html("&nbsp;&nbsp;Melbourne, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt203').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt109').html("&nbsp;&nbsp;Dubai, UAE").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt209').html("&nbsp;&nbsp;18").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.018)"});
        $('#pt111').html("&nbsp;&nbsp;Indian Wells, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt211').html("&nbsp;&nbsp;65").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.065)"});
        $('#pt113').html("&nbsp;&nbsp;Miami, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt213').html("&nbsp;&nbsp;35").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.035)"});
        $('#pt116').html("&nbsp;&nbsp;Lugano, Switzerland").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt216').html("&nbsp;&nbsp;180").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.18)"});
        $('#pt118').html("&nbsp;&nbsp;Istanbul, Turkey").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt218').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt120').html("&nbsp;&nbsp;Madrid, Spain").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt220').html("&nbsp;&nbsp;30").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.03)"});
        $('#pt121').html("&nbsp;&nbsp;Rome, Italy").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt221').html("&nbsp;&nbsp;20").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.02)"});
        $('#pt123').html("&nbsp;&nbsp;Paris, France").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt223').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt126').html("&nbsp;&nbsp;Den Bosch, Holland").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt226').html("&nbsp;&nbsp;60").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.06)"});
        $('#pt127').html("&nbsp;&nbsp;Mallorca, Spain").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt227').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt128').html("&nbsp;&nbsp;Eastbourne, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt228').html("&nbsp;&nbsp;305").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.305)"});
        $('#pt129').html("&nbsp;&nbsp;Wimbledon, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt229').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt133').html("&nbsp;&nbsp;San Jose, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt233').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt134').html("&nbsp;&nbsp;Montreal, Canada").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt234').html("&nbsp;&nbsp;105").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.105)"});
        $('#pt135').html("&nbsp;&nbsp;Cincinnati, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt235').html("&nbsp;&nbsp;350").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.35)"});
        $('#pt136').html("&nbsp;&nbsp;New Haven, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt236').html("&nbsp;&nbsp;470").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.47)"});
        $('#pt137').html("&nbsp;&nbsp;New York, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt237').html("&nbsp;&nbsp;240").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.24)"});
        $('#pt139').html("&nbsp;&nbsp;Quebec City, Canada").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt239').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt141').html("&nbsp;&nbsp;Wuhan, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt241').html("&nbsp;&nbsp;900").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.9)"});
        $('#pt142').html("&nbsp;&nbsp;Beijing, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt242').html("&nbsp;&nbsp;215").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.215)"});
        $('#pt143').html("&nbsp;&nbsp;Tianjin, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt243').html("&nbsp;&nbsp;60").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.06)"});
        $('#pt146').html("&nbsp;&nbsp;Zhuhai, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt246').html("&nbsp;&nbsp;160").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.16)"});
        $('#pt103').css({"background":"#548B54"})
        $('#pt123').css({"background":"#548B54"})
        $('#pt129').css({"background":"#548B54"})
        $('#pt137').css({"background":"#548B54"})
        });
        
        $('#player12').on('click', function(){
        $('.playerList').removeAttr('style');
        $('#player12').css({"color":"#8E388E","font-size": "1.5vw","font-weight":"bold"});
        $('#chartInTile3').empty();
        $('#chartInTile3').show();       
        drawchartInTile3("Anastasija Sevastova");
        $('#tableInTile3').css("overflow", "scroll");
        $('.weekh3').show();
        $('.zz').html("");
        $('.yy').html("");
        $('.zz').removeAttr('style');
        $('.yy').removeAttr('style');
        $('#pt200').html("Points Earned");
        $('#pt101').html("&nbsp;&nbsp;Brisbane, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt201').html("&nbsp;&nbsp;185").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.185)"});
        $('#pt102').html("&nbsp;&nbsp;Sydney, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt202').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt103').html("&nbsp;&nbsp;Melbourne, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt203').html("&nbsp;&nbsp;70").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.07)"});
        $('#pt108').html("&nbsp;&nbsp;Doha, Qatar").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt208').html("&nbsp;&nbsp;105").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.105)"});
        $('#pt109').html("&nbsp;&nbsp;Dubai, UAE").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt209').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt111').html("&nbsp;&nbsp;Indian Wells, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt211').html("&nbsp;&nbsp;120").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.12)"});
        $('#pt113').html("&nbsp;&nbsp;Miami, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt213').html("&nbsp;&nbsp;65").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.065)"});
        $('#pt115').html("&nbsp;&nbsp;Charleston, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt215').html("&nbsp;&nbsp;185").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.185)"});
        $('#pt120').html("&nbsp;&nbsp;Madrid, Spain").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt220').html("&nbsp;&nbsp;65").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.065)"});
        $('#pt121').html("&nbsp;&nbsp;Rome, Italy").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt221').html("&nbsp;&nbsp;105").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.105)"});
        $('#pt123').html("&nbsp;&nbsp;Paris, France").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt223').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt127').html("&nbsp;&nbsp;Mallorca, Spain").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt227').html("&nbsp;&nbsp;180").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.18)"});
        $('#pt128').html("&nbsp;&nbsp;Eastbourne, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt228').html("&nbsp;&nbsp;55").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.055)"});
        $('#pt129').html("&nbsp;&nbsp;Wimbledon, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt229').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt131').html("&nbsp;&nbsp;Bucharest, Romania").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt231').html("&nbsp;&nbsp;280").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.28)"});
        $('#pt132').html("&nbsp;&nbsp;Moscow, Russia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt232').html("&nbsp;&nbsp;60").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.06)"});
        $('#pt134').html("&nbsp;&nbsp;Montreal, Canada").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt234').html("&nbsp;&nbsp;190").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.19)"});
        $('#pt135').html("&nbsp;&nbsp;Cincinnati, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt235').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt137').html("&nbsp;&nbsp;New York, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt237').html("&nbsp;&nbsp;780").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.78)"});
        $('#pt141').html("&nbsp;&nbsp;Wuhan, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt241').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt142').html("&nbsp;&nbsp;Beijing, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt242').html("&nbsp;&nbsp;650").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.65)"});
        $('#pt144').html("&nbsp;&nbsp;Moscow, Russia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt244').html("&nbsp;&nbsp;185").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.185)"});
        $('#pt146').html("&nbsp;&nbsp;Zhuhai, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt246').html("&nbsp;&nbsp;160").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.16)"});
        $('#pt103').css({"background":"#548B54"})
        $('#pt123').css({"background":"#548B54"})
        $('#pt129').css({"background":"#548B54"})
        $('#pt137').css({"background":"#548B54"})
        });
        
        $('#player13').on('click', function(){
        $('.playerList').removeAttr('style');
        $('#player13').css({"color":"#8E388E","font-size": "1.5vw","font-weight":"bold"});
        $('#chartInTile3').empty();
        $('#chartInTile3').show();       
        drawchartInTile3("Elise Mertens");
        $('#tableInTile3').css("overflow", "scroll");
        $('.weekh3').show();
        $('.zz').html("");
        $('.yy').html("");
        $('.zz').removeAttr('style');
        $('.yy').removeAttr('style');
        $('#pt200').html("Points Earned");
        $('#pt102').html("&nbsp;&nbsp;Hobart, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt202').html("&nbsp;&nbsp;280").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.28)"});
        $('#pt103').html("&nbsp;&nbsp;Melbourne, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt203').html("&nbsp;&nbsp;780").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.78)"});
        $('#pt108').html("&nbsp;&nbsp;Doha, Qatar").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt208').html("&nbsp;&nbsp;60").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.06)"});
        $('#pt109').html("&nbsp;&nbsp;Dubai, UAE").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt209').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt111').html("&nbsp;&nbsp;Indian Wells, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt211').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt113').html("&nbsp;&nbsp;Miami, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt213').html("&nbsp;&nbsp;65").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.065)"});
        $('#pt116').html("&nbsp;&nbsp;Lugano, Switzerland").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt216').html("&nbsp;&nbsp;280").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.28)"});
        $('#pt119').html("&nbsp;&nbsp;Rabat, Morocco").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt219').html("&nbsp;&nbsp;280").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.28)"});
        $('#pt120').html("&nbsp;&nbsp;Madrid, Spain").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt220').html("&nbsp;&nbsp;65").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.065)"});
        $('#pt123').html("&nbsp;&nbsp;Paris, France").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt223').html("&nbsp;&nbsp;240").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.24)"});
        $('#pt126').html("&nbsp;&nbsp;Den Bosch, Holland").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt226').html("&nbsp;&nbsp;30").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.03)"});
        $('#pt127').html("&nbsp;&nbsp;Birmingham, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt227').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt128').html("&nbsp;&nbsp;Eastbourne, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt228').html("&nbsp;&nbsp;55").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.055)"});
        $('#pt129').html("&nbsp;&nbsp;Wimbledon, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt229').html("&nbsp;&nbsp;130").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.13)"});
        $('#pt133').html("&nbsp;&nbsp;San Jose, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt233').html("&nbsp;&nbsp;185").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.185)"});
        $('#pt134').html("&nbsp;&nbsp;Montreal, Canada").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt234').html("&nbsp;&nbsp;190").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.19)"});
        $('#pt135').html("&nbsp;&nbsp;Cincinnati, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt235').html("&nbsp;&nbsp;190").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.19)"});
        $('#pt137').html("&nbsp;&nbsp;New York, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt237').html("&nbsp;&nbsp;240").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.24)"});
        $('#pt141').html("&nbsp;&nbsp;Wuhan, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt241').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt143').html("&nbsp;&nbsp;Tianjin, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt243').html("&nbsp;&nbsp;60").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.06)"});
        $('#pt144').html("&nbsp;&nbsp;Moscow, Russia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt244').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt146').html("&nbsp;&nbsp;Zhuhai, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt246').html("&nbsp;&nbsp;160").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.16)"});
        $('#pt103').css({"background":"#548B54"})
        $('#pt123').css({"background":"#548B54"})
        $('#pt129').css({"background":"#548B54"})
        $('#pt137').css({"background":"#548B54"})
        });
        
        $('#player14').on('click', function(){
        $('.playerList').removeAttr('style');
        $('#player14').css({"color":"#8E388E","font-size": "1.5vw","font-weight":"bold"});
        $('#chartInTile3').empty();
        $('#chartInTile3').show();       
        drawchartInTile3("Julia Goerges");
        $('#tableInTile3').css("overflow", "scroll");
        $('.weekh3').show();
        $('.zz').html("");
        $('.yy').html("");
        $('.zz').removeAttr('style');
        $('.yy').removeAttr('style');
        $('#pt200').html("Points Earned");
        $('#pt101').html("&nbsp;&nbsp;Auckland, New Zealand").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt201').html("&nbsp;&nbsp;280").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.28)"});
        $('#pt103').html("&nbsp;&nbsp;Melbourne, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt203').html("&nbsp;&nbsp;70").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.07)"});
        $('#pt106').html("&nbsp;&nbsp;St. Petersburg, Russia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt206').html("&nbsp;&nbsp;185").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.185)"});
        $('#pt108').html("&nbsp;&nbsp;Doha, Qatar").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt208').html("&nbsp;&nbsp;190").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.19)"});
        $('#pt111').html("&nbsp;&nbsp;Indian Wells, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt211').html("&nbsp;&nbsp;65").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.065)"});
        $('#pt113').html("&nbsp;&nbsp;Miami, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt213').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt115').html("&nbsp;&nbsp;Charleston, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt215').html("&nbsp;&nbsp;305").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.305)"});
        $('#pt118').html("&nbsp;&nbsp;Stuttgart, Germany").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt218').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt120').html("&nbsp;&nbsp;Madrid, Spain").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt220').html("&nbsp;&nbsp;120").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.12)"});
        $('#pt122').html("&nbsp;&nbsp;Nuernberg, Germany").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt222').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt123').html("&nbsp;&nbsp;Paris, France").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt223').html("&nbsp;&nbsp;130").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.13)"});
        $('#pt127').html("&nbsp;&nbsp;Birmingham, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt227').html("&nbsp;&nbsp;100").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.1)"});
        $('#pt128').html("&nbsp;&nbsp;Eastbourne, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt228').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt129').html("&nbsp;&nbsp;Wimbledon, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt229').html("&nbsp;&nbsp;780").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.78)"});
        $('#pt132').html("&nbsp;&nbsp;Moscow, Russia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt232').html("&nbsp;&nbsp;60").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.06)"});
        $('#pt134').html("&nbsp;&nbsp;Montreal, Canada").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt234').html("&nbsp;&nbsp;105").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.105)"});
        $('#pt135').html("&nbsp;&nbsp;Cincinnati, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt235').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt136').html("&nbsp;&nbsp;New Haven, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt236').html("&nbsp;&nbsp;185").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.185)"});
        $('#pt137').html("&nbsp;&nbsp;New York, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt237').html("&nbsp;&nbsp;70").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.07)"});
        $('#pt141').html("&nbsp;&nbsp;Wuhan, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt241').html("&nbsp;&nbsp;60").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.06)"});
        $('#pt142').html("&nbsp;&nbsp;Beijing, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt242').html("&nbsp;&nbsp;120").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.12)"});
        $('#pt143').html("&nbsp;&nbsp;Linz, Austria").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt243').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt144').html("&nbsp;&nbsp;Luxembourg").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt244').html("&nbsp;&nbsp;280").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.28)"});
        $('#pt146').html("&nbsp;&nbsp;Zhuhai, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt246').html("&nbsp;&nbsp;160").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.16)"});
        $('#pt103').css({"background":"#548B54"})
        $('#pt123').css({"background":"#548B54"})
        $('#pt129').css({"background":"#548B54"})
        $('#pt137').css({"background":"#548B54"})
        });
           
        $('#player15').on('click', function(){
        $('.playerList').removeAttr('style');
        $('#player15').css({"color":"#8E388E","font-size": "1.5vw","font-weight":"bold"});
        $('#chartInTile3').empty();
        $('#chartInTile3').show();       
        drawchartInTile3("Ashleigh Barty");
        $('#tableInTile3').css("overflow", "scroll");
        $('.weekh3').show();
        $('.zz').html("");
        $('.yy').html("");
        $('.zz').removeAttr('style');
        $('.yy').removeAttr('style');
        $('#pt200').html("Points Earned");
        $('#pt101').html("&nbsp;&nbsp;Brisbane, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt201').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt102').html("&nbsp;&nbsp;Sydney, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt202').html("&nbsp;&nbsp;305").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.305)"});
        $('#pt103').html("&nbsp;&nbsp;Melbourne, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt203').html("&nbsp;&nbsp;130").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.13)"});
        $('#pt111').html("&nbsp;&nbsp;Indian Wells, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt211').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt113').html("&nbsp;&nbsp;Miami, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt213').html("&nbsp;&nbsp;120").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.12)"});
        $('#pt115').html("&nbsp;&nbsp;Charleston, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt215').html("&nbsp;&nbsp;55").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.055)"});
        $('#pt120').html("&nbsp;&nbsp;Madrid, Spain").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt220').html("&nbsp;&nbsp;65").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.065)"});
        $('#pt121').html("&nbsp;&nbsp;Rome, Italy").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt221').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt122').html("&nbsp;&nbsp;Strasbourg, France").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt222').html("&nbsp;&nbsp;110").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.11)"});
        $('#pt123').html("&nbsp;&nbsp;Paris, France").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt223').html("&nbsp;&nbsp;70").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.07)"});
        $('#pt126').html("&nbsp;&nbsp;Nottingham, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt226').html("&nbsp;&nbsp;280").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.28)"});
        $('#pt127').html("&nbsp;&nbsp;Birmingham, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt227').html("&nbsp;&nbsp;55").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.055)"});
        $('#pt128').html("&nbsp;&nbsp;Eastbourne, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt228').html("&nbsp;&nbsp;100").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.1)"});
        $('#pt129').html("&nbsp;&nbsp;Wimbledon, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt229').html("&nbsp;&nbsp;130").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.13)"});
        $('#pt134').html("&nbsp;&nbsp;Montreal, Canada").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt234').html("&nbsp;&nbsp;350").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.35)"});
        $('#pt135').html("&nbsp;&nbsp;Cincinnati, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt235').html("&nbsp;&nbsp;105").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.105)"});
        $('#pt137').html("&nbsp;&nbsp;New York, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt237').html("&nbsp;&nbsp;240").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.24)"});
        $('#pt140').html("&nbsp;&nbsp;Tokyo, Japan").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt240').html("&nbsp;&nbsp;55").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.055)"});
        $('#pt141').html("&nbsp;&nbsp;Wuhan, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt241').html("&nbsp;&nbsp;350").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.35)"});
        $('#pt146').html("&nbsp;&nbsp;Zhuhai, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt246').html("&nbsp;&nbsp;620").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.62)"});
        $('#pt103').css({"background":"#548B54"})
        $('#pt123').css({"background":"#548B54"})
        $('#pt129').css({"background":"#548B54"})
        $('#pt137').css({"background":"#548B54"})
        });
        
        $('#player16').on('click', function(){
        $('.playerList').removeAttr('style');
        $('#player16').css({"color":"#8E388E","font-size": "1.5vw","font-weight":"bold"});
        $('#chartInTile3').empty();
        $('#chartInTile3').show();       
        drawchartInTile3("Serena Williams");
        $('#tableInTile3').css("overflow", "scroll");
        $('.weekh3').show();
        $('.zz').html("");
        $('.yy').html("");
        $('.zz').removeAttr('style');
        $('.yy').removeAttr('style');
        $('#pt200').html("Points Earned");
        $('#pt111').html("&nbsp;&nbsp;Indian Wells, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt211').html("&nbsp;&nbsp;65").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.065)"});
        $('#pt113').html("&nbsp;&nbsp;Miami, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt213').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt123').html("&nbsp;&nbsp;Paris, France").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt223').html("&nbsp;&nbsp;240").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.24)"});
        $('#pt129').html("&nbsp;&nbsp;Wimbledon, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt229').html("&nbsp;&nbsp;1300").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,1.3)"});
        $('#pt133').html("&nbsp;&nbsp;San Jose, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt233').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt135').html("&nbsp;&nbsp;Cincinnati, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt235').html("&nbsp;&nbsp;60").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.06)"});
        $('#pt137').html("&nbsp;&nbsp;New York, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt237').html("&nbsp;&nbsp;1300").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,1.3)"});
        // $('#pt103').css({"background":"#548B54"})
        $('#pt123').css({"background":"#548B54"})
        $('#pt129').css({"background":"#548B54"})
        $('#pt137').css({"background":"#548B54"})
        });
        
        $('#player17').on('click', function(){
        $('.playerList').removeAttr('style');
        $('#player17').css({"color":"#8E388E","font-size": "1.5vw","font-weight":"bold"});
        $('#chartInTile3').empty();
        $('#chartInTile3').show();       
        drawchartInTile3("Madison Keys");
        $('#tableInTile3').css("overflow", "scroll");
        $('.weekh3').show();
        $('.zz').html("");
        $('.yy').html("");
        $('.zz').removeAttr('style');
        $('.yy').removeAttr('style');
        $('#pt200').html("Points Earned");
        $('#pt101').html("&nbsp;&nbsp;Brisbane, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt201').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt103').html("&nbsp;&nbsp;Melbourne, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt203').html("&nbsp;&nbsp;430").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.43)"});
        $('#pt108').html("&nbsp;&nbsp;Doha, Qatar").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt208').html("&nbsp;&nbsp;60").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.06)"});
        $('#pt111').html("&nbsp;&nbsp;Indian Wells, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt211').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt113').html("&nbsp;&nbsp;Miami, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt213').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt115').html("&nbsp;&nbsp;Charleston, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt215').html("&nbsp;&nbsp;185").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.185)"});
        $('#pt118').html("&nbsp;&nbsp;Stuttgart, Germany").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt218').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt121').html("&nbsp;&nbsp;Rome, Italy").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt221').html("&nbsp;&nbsp;105").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.105)"});
        $('#pt123').html("&nbsp;&nbsp;Paris, France").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt223').html("&nbsp;&nbsp;780").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.78)"});
        $('#pt129').html("&nbsp;&nbsp;Wimbledon, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt229').html("&nbsp;&nbsp;130").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.13)"});
        $('#pt135').html("&nbsp;&nbsp;Cincinnati, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt235').html("&nbsp;&nbsp;190").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.19)"});
        $('#pt137').html("&nbsp;&nbsp;New York, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt237').html("&nbsp;&nbsp;780").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.78)"});
        $('#pt141').html("&nbsp;&nbsp;Wuhan, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt241').html("&nbsp;&nbsp;60").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.06)"});
        $('#pt142').html("&nbsp;&nbsp;Beijing, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt242').html("&nbsp;&nbsp;65").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.065)"});
        $('#pt146').html("&nbsp;&nbsp;Zhuhai, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt246').html("&nbsp;&nbsp;160").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.16)"});
        $('#pt103').css({"background":"#548B54"})
        $('#pt123').css({"background":"#548B54"})
        $('#pt129').css({"background":"#548B54"})
        $('#pt137').css({"background":"#548B54"})
        });
        
        $('#player18').on('click', function(){
        $('.playerList').removeAttr('style');
        $('#player18').css({"color":"#8E388E","font-size": "1.5vw","font-weight":"bold"});
        $('#chartInTile3').empty();
        $('#chartInTile3').show();       
        drawchartInTile3("Garbine Muguruza");
        $('#tableInTile3').css("overflow", "scroll");
        $('.weekh3').show();
        $('.zz').html("");
        $('.yy').html("");
        $('.zz').removeAttr('style');
        $('.yy').removeAttr('style');
        $('#pt200').html("Points Earned");
        $('#pt101').html("&nbsp;&nbsp;Brisbane, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt201').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt102').html("&nbsp;&nbsp;Sydney, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt202').html("&nbsp;&nbsp;100").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.1)"});
        $('#pt103').html("&nbsp;&nbsp;Melbourne, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt203').html("&nbsp;&nbsp;70").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.07)"});
        $('#pt108').html("&nbsp;&nbsp;Doha, Qatar").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt208').html("&nbsp;&nbsp;585").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.585)"});
        $('#pt109').html("&nbsp;&nbsp;Dubai, UAE").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt209').html("&nbsp;&nbsp;185").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.185)"});
        $('#pt111').html("&nbsp;&nbsp;Indian Wells, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt211').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt113').html("&nbsp;&nbsp;Miami, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt213').html("&nbsp;&nbsp;120").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.12)"});
        $('#pt115').html("&nbsp;&nbsp;Monterrey, Mexico").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt215').html("&nbsp;&nbsp;280").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.28)"});
        $('#pt118').html("&nbsp;&nbsp;Stuttgart, Germany").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt218').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt120').html("&nbsp;&nbsp;Madrid, Spain").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt220').html("&nbsp;&nbsp;120").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.12)"});
        $('#pt121').html("&nbsp;&nbsp;Rome, Italy").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt221').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt123').html("&nbsp;&nbsp;Paris, France").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt223').html("&nbsp;&nbsp;780").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.78)"});
        $('#pt127').html("&nbsp;&nbsp;Birmingham, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt227').html("&nbsp;&nbsp;55").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.055)"});
        $('#pt129').html("&nbsp;&nbsp;Wimbledon, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt229').html("&nbsp;&nbsp;70").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.07)"});
        $('#pt135').html("&nbsp;&nbsp;Cincinnati, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt235').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt137').html("&nbsp;&nbsp;New York, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt237').html("&nbsp;&nbsp;70").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.07)"});
        $('#pt140').html("&nbsp;&nbsp;Tokyo, Japan").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt240').html("&nbsp;&nbsp;55").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.055)"});
        $('#pt141').html("&nbsp;&nbsp;Wuhan, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt241').html("&nbsp;&nbsp;105").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.105)"});
        $('#pt142').html("&nbsp;&nbsp;Beijing, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt242').html("&nbsp;&nbsp;65").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.065)"});
        $('#pt143').html("&nbsp;&nbsp;Hong Kong, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt243').html("&nbsp;&nbsp;110").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.11)"});
        $('#pt144').html("&nbsp;&nbsp;Luxembourg").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt244').html("&nbsp;&nbsp;30").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.03)"});
        $('#pt146').html("&nbsp;&nbsp;Zhuhai, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt246').html("&nbsp;&nbsp;240").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.24)"});
        $('#pt103').css({"background":"#548B54"})
        $('#pt123').css({"background":"#548B54"})
        $('#pt129').css({"background":"#548B54"})
        $('#pt137').css({"background":"#548B54"})
        });
        
        $('#player19').on('click', function(){
        $('.playerList').removeAttr('style');
        $('#player19').css({"color":"#8E388E","font-size": "1.5vw","font-weight":"bold"});
        $('#chartInTile3').empty();
        $('#chartInTile3').show();       
        drawchartInTile3("Caroline Garcia");
        $('#tableInTile3').css("overflow", "scroll");
        $('.weekh3').show();
        $('.zz').html("");
        $('.yy').html("");
        $('.zz').removeAttr('style');
        $('.yy').removeAttr('style');
        $('#pt200').html("Points Earned");
        $('#pt101').html("&nbsp;&nbsp;Brisbane, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt201').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt103').html("&nbsp;&nbsp;Melbourne, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt203').html("&nbsp;&nbsp;240").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.24)"});
        $('#pt106').html("&nbsp;&nbsp;St. Petersburg, Russia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt206').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt108').html("&nbsp;&nbsp;Doha, Qatar").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt208').html("&nbsp;&nbsp;190").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.19)"});
        $('#pt109').html("&nbsp;&nbsp;Dubai, UAE").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt209').html("&nbsp;&nbsp;100").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.1)"});
        $('#pt111').html("&nbsp;&nbsp;Indian Wells, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt211').html("&nbsp;&nbsp;120").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.12)"});
        $('#pt113').html("&nbsp;&nbsp;Miami, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt213').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt115').html("&nbsp;&nbsp;Charleston, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt215').html("&nbsp;&nbsp;55").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.055)"});
        $('#pt118').html("&nbsp;&nbsp;Stuttgart, Germany").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt218').html("&nbsp;&nbsp;185").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.185)"});
        $('#pt120').html("&nbsp;&nbsp;Madrid, Spain").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt220').html("&nbsp;&nbsp;390").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.39)"});
        $('#pt121').html("&nbsp;&nbsp;Rome, Italy").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt221').html("&nbsp;&nbsp;190").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.19)"});
        $('#pt123').html("&nbsp;&nbsp;Paris, France").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt223').html("&nbsp;&nbsp;240").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.24)"});
        $('#pt127').html("&nbsp;&nbsp;Mallorca, Spain").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt227').html("&nbsp;&nbsp;60").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.06)"});
        $('#pt129').html("&nbsp;&nbsp;Wimbledon, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt229').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt134').html("&nbsp;&nbsp;Montreal, Canada").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt234').html("&nbsp;&nbsp;190").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.19)"});
        $('#pt135').html("&nbsp;&nbsp;Cincinnati, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt235').html("&nbsp;&nbsp;105").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.105)"});
        $('#pt136').html("&nbsp;&nbsp;New Haven, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt236').html("&nbsp;&nbsp;100").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.1)"});
        $('#pt137').html("&nbsp;&nbsp;New York, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt237').html("&nbsp;&nbsp;130").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.13)"});
        $('#pt140').html("&nbsp;&nbsp;Tokyo, Japan").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt240').html("&nbsp;&nbsp;100").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.1)"});
        $('#pt141').html("&nbsp;&nbsp;Wuhan, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt241').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt142').html("&nbsp;&nbsp;Beijing, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt242').html("&nbsp;&nbsp;120").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.12)"});
        $('#pt143').html("&nbsp;&nbsp;Tianjin, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt243').html("&nbsp;&nbsp;280").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.28)"});
        $('#pt146').html("&nbsp;&nbsp;Zhuhai, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt246').html("&nbsp;&nbsp;160").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.16)"});
        $('#pt103').css({"background":"#548B54"})
        $('#pt123').css({"background":"#548B54"})
        $('#pt129').css({"background":"#548B54"})
        $('#pt137').css({"background":"#548B54"})
        });
        
        $('#player20').on('click', function(){
        $('.playerList').removeAttr('style');
        $('#player20').css({"color":"#8E388E","font-size": "1.5vw","font-weight":"bold"});
        $('#chartInTile3').empty();
        $('#chartInTile3').show();       
        drawchartInTile3("Qiang Wang");
        $('#tableInTile3').css("overflow", "scroll");
        $('.weekh3').show();
        $('.zz').html("");
        $('.yy').html("");
        $('.zz').removeAttr('style');
        $('.yy').removeAttr('style');
        $('#pt200').html("Points Earned");
        $('#pt101').html("&nbsp;&nbsp;Shenzhen, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt201').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt103').html("&nbsp;&nbsp;Melbourne, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt203').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt108').html("&nbsp;&nbsp;Doha, Qatar").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt208').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt109').html("&nbsp;&nbsp;Dubai, UAE").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt209').html("&nbsp;&nbsp;110").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.11)"});
        $('#pt111').html("&nbsp;&nbsp;Indian Wells, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt211').html("&nbsp;&nbsp;120").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.12)"});
        $('#pt113').html("&nbsp;&nbsp;Miami, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt213').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt118').html("&nbsp;&nbsp;Istanbul, Turkey").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt218').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt119').html("&nbsp;&nbsp;Prague, Czechia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt219').html("&nbsp;&nbsp;30").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.03)"});
        $('#pt120').html("&nbsp;&nbsp;Madrid, Spain").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt220').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt121').html("&nbsp;&nbsp;Rome, Italy").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt221').html("&nbsp;&nbsp;40").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.04)"});
        $('#pt122').html("&nbsp;&nbsp;Strasbourg, France").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt222').html("&nbsp;&nbsp;60").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.06)"});
        $('#pt123').html("&nbsp;&nbsp;Paris, France").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt223').html("&nbsp;&nbsp;130").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.13)"});
        $('#pt129').html("&nbsp;&nbsp;Wimbledon, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt229').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt132').html("&nbsp;&nbsp;Nanchang, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt232').html("&nbsp;&nbsp;280").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.28)"});
        $('#pt133').html("&nbsp;&nbsp;San Jose, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt233').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt134').html("&nbsp;&nbsp;Montreal, Canada").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt234').html("&nbsp;&nbsp;60").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.06)"});
        $('#pt137').html("&nbsp;&nbsp;New York, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt237').html("&nbsp;&nbsp;130").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.13)"});
        $('#pt139').html("&nbsp;&nbsp;Hiroshima, Japan").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt239').html("&nbsp;&nbsp;110").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.11)"});
        $('#pt140').html("&nbsp;&nbsp;Guangzhou, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt240').html("&nbsp;&nbsp;280").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.28)"});
        $('#pt141').html("&nbsp;&nbsp;Wuhan, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt241').html("&nbsp;&nbsp;350").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.35)"});
        $('#pt142').html("&nbsp;&nbsp;Beijing, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt242').html("&nbsp;&nbsp;390").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.39)"});
        $('#pt143').html("&nbsp;&nbsp;Hong Kong, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt243').html("&nbsp;&nbsp;180").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.18)"});
        $('#pt146').html("&nbsp;&nbsp;Zhuhai, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt246').html("&nbsp;&nbsp;360").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.36)"});
        $('#pt103').css({"background":"#548B54"})
        $('#pt123').css({"background":"#548B54"})
        $('#pt129').css({"background":"#548B54"})
        $('#pt137').css({"background":"#548B54"})
        });
        
        $('#player21').on('click', function(){
        $('.playerList').removeAttr('style');
        $('#player21').css({"color":"#8E388E","font-size": "1.5vw","font-weight":"bold"});
        $('#chartInTile3').empty();
        $('#chartInTile3').show();       
        drawchartInTile3("Anett Kontaveit");
        $('#tableInTile3').css("overflow", "scroll");
        $('.weekh3').show();
        $('.zz').html("");
        $('.yy').html("");
        $('.zz').removeAttr('style');
        $('.yy').removeAttr('style');
        $('#pt200').html("Points Earned");
        $('#pt101').html("&nbsp;&nbsp;Brisbane, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt201').html("&nbsp;&nbsp;55").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.055)"});
        $('#pt102').html("&nbsp;&nbsp;Sydney, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt202').html("&nbsp;&nbsp;2").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.002)"});
        $('#pt103').html("&nbsp;&nbsp;Melbourne, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt203').html("&nbsp;&nbsp;240").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.24)"});
        $('#pt108').html("&nbsp;&nbsp;Doha, Qatar").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt208').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt109').html("&nbsp;&nbsp;Dubai, UAE").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt209').html("&nbsp;&nbsp;55").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.055)"});
        $('#pt111').html("&nbsp;&nbsp;Indian Wells, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt211').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt113').html("&nbsp;&nbsp;Miami, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt213').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt116').html("&nbsp;&nbsp;Lugano, Switzerland").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt216').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt118').html("&nbsp;&nbsp;Stuttgart, Germany").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt218').html("&nbsp;&nbsp;185").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.185)"});
        $('#pt120').html("&nbsp;&nbsp;Madrid, Spain").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt220').html("&nbsp;&nbsp;120").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.12)"});
        $('#pt121').html("&nbsp;&nbsp;Rome, Italy").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt221').html("&nbsp;&nbsp;350").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.35)"});
        $('#pt123').html("&nbsp;&nbsp;Paris, France").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt223').html("&nbsp;&nbsp;240").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.24)"});
        $('#pt126').html("&nbsp;&nbsp;Den Bosch, Holland").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt226').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt127').html("&nbsp;&nbsp;Mallorca, Spain").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt227').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt129').html("&nbsp;&nbsp;Wimbledon, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt229').html("&nbsp;&nbsp;130").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.13)"});
        $('#pt134').html("&nbsp;&nbsp;Montreal, Canada").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt234').html("&nbsp;&nbsp;60").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.06)"});
        $('#pt135').html("&nbsp;&nbsp;Cincinnati, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt235').html("&nbsp;&nbsp;105").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.105)"});
        $('#pt136').html("&nbsp;&nbsp;New Haven, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt236').html("&nbsp;&nbsp;55").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.055)"});
        $('#pt137').html("&nbsp;&nbsp;New York, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt237').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt140').html("&nbsp;&nbsp;Tokyo, Japan").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt240').html("&nbsp;&nbsp;55").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.055)"});
        $('#pt141').html("&nbsp;&nbsp;Wuhan, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt241').html("&nbsp;&nbsp;585").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.585)"});
        $('#pt142').html("&nbsp;&nbsp;Beijing, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt242').html("&nbsp;&nbsp;120").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.12)"});
        $('#pt144').html("&nbsp;&nbsp;Moscow, Russia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt244').html("&nbsp;&nbsp;100").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.1)"});
        $('#pt146').html("&nbsp;&nbsp;Zhuhai, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt246').html("&nbsp;&nbsp;160").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.16)"});
        $('#pt103').css({"background":"#548B54"})
        $('#pt123').css({"background":"#548B54"})
        $('#pt129').css({"background":"#548B54"})
        $('#pt137').css({"background":"#548B54"})
        });
        
        $('#player22').on('click', function(){
        $('.playerList').removeAttr('style');
        $('#player22').css({"color":"#8E388E","font-size": "1.5vw","font-weight":"bold"});
        $('#chartInTile3').empty();
        $('#chartInTile3').show();       
        drawchartInTile3("Jelena Ostapenko");
        $('#tableInTile3').css("overflow", "scroll");
        $('.weekh3').show();
        $('.zz').html("");
        $('.yy').html("");
        $('.zz').removeAttr('style');
        $('.yy').removeAttr('style');
        $('#pt200').html("Points Earned");
        $('#pt101').html("&nbsp;&nbsp;Shenzhen, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt201').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt102').html("&nbsp;&nbsp;Sydney, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt202').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt103').html("&nbsp;&nbsp;Melbourne, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt203').html("&nbsp;&nbsp;130").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.13)"});
        $('#pt106').html("&nbsp;&nbsp;St. Petersburg, Russia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt206').html("&nbsp;&nbsp;100").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.1)"});
        $('#pt108').html("&nbsp;&nbsp;Doha, Qatar").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt208').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt109').html("&nbsp;&nbsp;Dubai, UAE").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt209').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt111').html("&nbsp;&nbsp;Indian Wells, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt211').html("&nbsp;&nbsp;65").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.065)"});
        $('#pt113').html("&nbsp;&nbsp;Miami, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt213').html("&nbsp;&nbsp;650").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.65)"});
        $('#pt118').html("&nbsp;&nbsp;Stuttgart, Germany").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt218').html("&nbsp;&nbsp;100").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.1)"});
        $('#pt120').html("&nbsp;&nbsp;Madrid, Spain").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt220').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt121').html("&nbsp;&nbsp;Rome, Italy").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt221').html("&nbsp;&nbsp;190").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.19)"});
        $('#pt123').html("&nbsp;&nbsp;Paris, France").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt223').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt128').html("&nbsp;&nbsp;Eastbourne, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt228').html("&nbsp;&nbsp;100").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.1)"});
        $('#pt129').html("&nbsp;&nbsp;Wimbledon, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt229').html("&nbsp;&nbsp;780").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.78)"});
        $('#pt134').html("&nbsp;&nbsp;Montreal, Canada").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt234').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt135').html("&nbsp;&nbsp;Cincinnati, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt235').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt137').html("&nbsp;&nbsp;New York, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt237').html("&nbsp;&nbsp;130").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.13)"});
        $('#pt140').html("&nbsp;&nbsp;Seoul, Korea").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt240').html("&nbsp;&nbsp;30").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.03)"});
        $('#pt141').html("&nbsp;&nbsp;Wuhan, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt241').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt142').html("&nbsp;&nbsp;Beijing, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt242').html("&nbsp;&nbsp;65").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.065)"});
        $('#pt143').html("&nbsp;&nbsp;Hong Kong, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt243').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt103').css({"background":"#548B54"})
        $('#pt123').css({"background":"#548B54"})
        $('#pt129').css({"background":"#548B54"})
        $('#pt137').css({"background":"#548B54"})
        });
        
        $('#player23').on('click', function(){
        $('.playerList').removeAttr('style');
        $('#player23').css({"color":"#8E388E","font-size": "1.5vw","font-weight":"bold"});
        $('#chartInTile3').empty();
        $('#chartInTile3').show();       
        drawchartInTile3("Carla Suarez Navarro");
        $('#tableInTile3').css("overflow", "scroll");
        $('.weekh3').show();
        $('.zz').html("");
        $('.yy').html("");
        $('.zz').removeAttr('style');
        $('.yy').removeAttr('style');
        $('#pt200').html("Points Earned");
        $('#pt101').html("&nbsp;&nbsp;Brisbane, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt201').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt102').html("&nbsp;&nbsp;Sydney, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt202').html("&nbsp;&nbsp;2").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.002)"});
        $('#pt103').html("&nbsp;&nbsp;Melbourne, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt203').html("&nbsp;&nbsp;430").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.43)"});
        $('#pt108').html("&nbsp;&nbsp;Doha, Qatar").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt208').html("&nbsp;&nbsp;60").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.06)"});
        $('#pt109').html("&nbsp;&nbsp;Dubai, UAE").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt209').html("&nbsp;&nbsp;55").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.055)"});
        $('#pt111').html("&nbsp;&nbsp;Indian Wells, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt211').html("&nbsp;&nbsp;215").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.215)"});
        $('#pt113').html("&nbsp;&nbsp;Miami, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt213').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt118').html("&nbsp;&nbsp;Stuttgart, Germany").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt218').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt120').html("&nbsp;&nbsp;Madrid, Spain").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt220').html("&nbsp;&nbsp;215").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.215)"});
        $('#pt121').html("&nbsp;&nbsp;Rome, Italy").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt221').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt123').html("&nbsp;&nbsp;Paris, France").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt223').html("&nbsp;&nbsp;70").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.07)"});
        $('#pt127').html("&nbsp;&nbsp;Mallorca, Spain").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt227').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt128').html("&nbsp;&nbsp;Eastbourne, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt228').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt129').html("&nbsp;&nbsp;Wimbledon, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt229').html("&nbsp;&nbsp;130").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.13)"});
        $('#pt134').html("&nbsp;&nbsp;Montreal, Canada").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt234').html("&nbsp;&nbsp;270").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.27)"});
        $('#pt135').html("&nbsp;&nbsp;Cincinnati, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt235').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt136').html("&nbsp;&nbsp;New Haven, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt236').html("&nbsp;&nbsp;305").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.305)"});
        $('#pt137').html("&nbsp;&nbsp;New York, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt237').html("&nbsp;&nbsp;430").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.43)"});
        $('#pt141').html("&nbsp;&nbsp;Wuhan, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt241').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt142').html("&nbsp;&nbsp;Beijing, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt242').html("&nbsp;&nbsp;65").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.065)"});
        $('#pt144').html("&nbsp;&nbsp;Luxembourg").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt244').html("&nbsp;&nbsp;30").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.03)"});
        $('#pt103').css({"background":"#548B54"})
        $('#pt123').css({"background":"#548B54"})
        $('#pt129').css({"background":"#548B54"})
        $('#pt137').css({"background":"#548B54"})
        });
        
        $('#player24').on('click', function(){
        $('.playerList').removeAttr('style');
        $('#player24').css({"color":"#8E388E","font-size": "1.5vw","font-weight":"bold"});
        $('#chartInTile3').empty();
        $('#chartInTile3').show();       
        drawchartInTile3("Mihaela Buzarnescu");
        $('#tableInTile3').css("overflow", "scroll");
        $('.weekh3').show();
        $('.zz').html("");
        $('.yy').html("");
        $('.zz').removeAttr('style');
        $('.yy').removeAttr('style');
        $('#pt200').html("Points Earned");
        $('#pt101').html("&nbsp;&nbsp;Shenzhen, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt201').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt102').html("&nbsp;&nbsp;Hobart, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt202').html("&nbsp;&nbsp;180").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.18)"});
        $('#pt103').html("&nbsp;&nbsp;Melbourne, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt203').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt105').html("&nbsp;&nbsp;Midland, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt205').html("&nbsp;&nbsp;50").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.05)"});
        $('#pt108').html("&nbsp;&nbsp;Doha, Qatar").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt208').html("&nbsp;&nbsp;105").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.105)"});
        $('#pt109').html("&nbsp;&nbsp;Budapest, Hungary").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt209').html("&nbsp;&nbsp;30").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.03)"});
        $('#pt111').html("&nbsp;&nbsp;Indian Wells, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt211').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt113').html("&nbsp;&nbsp;Miami, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt213').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt115').html("&nbsp;&nbsp;Charleston, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt215').html("&nbsp;&nbsp;30").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.03)"});
        $('#pt116').html("&nbsp;&nbsp;Lugano, Switzerland").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt216').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt119').html("&nbsp;&nbsp;Prague, Czechia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt219').html("&nbsp;&nbsp;180").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.18)"});
        $('#pt120').html("&nbsp;&nbsp;Madrid, Spain").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt220').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt121').html("&nbsp;&nbsp;Rome, Italy").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt221').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt122').html("&nbsp;&nbsp;Strasbourg, France").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt222').html("&nbsp;&nbsp;110").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.11)"});
        $('#pt123').html("&nbsp;&nbsp;Paris, France").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt223').html("&nbsp;&nbsp;240").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.24)"});
        $('#pt126').html("&nbsp;&nbsp;Nottingham, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt226').html("&nbsp;&nbsp;60").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.06)"});
        $('#pt127').html("&nbsp;&nbsp;Birmingham, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt227').html("&nbsp;&nbsp;185").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.185)"});
        $('#pt128').html("&nbsp;&nbsp;Eastbourne, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt228').html("&nbsp;&nbsp;55").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.055)"});
        $('#pt129').html("&nbsp;&nbsp;Wimbledon, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt229').html("&nbsp;&nbsp;130").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.13)"});
        $('#pt131').html("&nbsp;&nbsp;Bucharest, Romania").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt231').html("&nbsp;&nbsp;110").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.11)"});
        $('#pt133').html("&nbsp;&nbsp;San Jose, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt233').html("&nbsp;&nbsp;470").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.47)"});
        $('#pt134').html("&nbsp;&nbsp;Montreal, Canada").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt234').html("&nbsp;&nbsp;60").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.06)"});
        $('#pt142').html("&nbsp;&nbsp;Beijing, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt242').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt144').html("&nbsp;&nbsp;Moscow, Russia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt244').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt103').css({"background":"#548B54"})
        $('#pt123').css({"background":"#548B54"})
        $('#pt129').css({"background":"#548B54"})
        // $('#pt137').css({"background":"#548B54"})
        });
        
        $('#player25').on('click', function(){
        $('.playerList').removeAttr('style');
        $('#player25').css({"color":"#8E388E","font-size": "1.5vw","font-weight":"bold"});
        $('#chartInTile3').empty();
        $('#chartInTile3').show();       
        drawchartInTile3("Dominika Cibulkova");
        $('#tableInTile3').css("overflow", "scroll");
        $('.weekh3').show();
        $('.zz').html("");
        $('.yy').html("");
        $('.zz').removeAttr('style');
        $('.yy').removeAttr('style');
        $('#pt200').html("Points Earned");
        $('#pt102').html("&nbsp;&nbsp;Sydney, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt202').html("&nbsp;&nbsp;100").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.1)"});
        $('#pt103').html("&nbsp;&nbsp;Melbourne, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt203').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt106').html("&nbsp;&nbsp;St. Petersburg, Russia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt206').html("&nbsp;&nbsp;55").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.055)"});
        $('#pt108').html("&nbsp;&nbsp;Doha, Qatar").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt208').html("&nbsp;&nbsp;60").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.06)"});
        $('#pt109').html("&nbsp;&nbsp;Budapest, Hungary").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt209').html("&nbsp;&nbsp;180").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.18)"});
        $('#pt111').html("&nbsp;&nbsp;Indian Wells, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt211').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt119').html("&nbsp;&nbsp;Rabat, Morocco").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt219').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt120').html("&nbsp;&nbsp;Madrid, Spain").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt220').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt121').html("&nbsp;&nbsp;Rome, Italy").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt221').html("&nbsp;&nbsp;60").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.06)"});
        $('#pt122').html("&nbsp;&nbsp;Strasbourg, France").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt222').html("&nbsp;&nbsp;180").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.18)"});
        $('#pt123').html("&nbsp;&nbsp;Paris, France").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt223').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt127').html("&nbsp;&nbsp;Birmingham, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt227').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt128').html("&nbsp;&nbsp;Eastbourne, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt228').html("&nbsp;&nbsp;30").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.03)"});
        $('#pt129').html("&nbsp;&nbsp;Wimbledon, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt229').html("&nbsp;&nbsp;430").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.43)"});
        $('#pt136').html("&nbsp;&nbsp;New Haven, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt236').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt137').html("&nbsp;&nbsp;New York, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt237').html("&nbsp;&nbsp;240").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.24)"});
        $('#pt140').html("&nbsp;&nbsp;Tokyo, Japan").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt240').html("&nbsp;&nbsp;55").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.055)"});
        $('#pt141').html("&nbsp;&nbsp;Wuhan, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt241').html("&nbsp;&nbsp;190").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.19)"});
        $('#pt142').html("&nbsp;&nbsp;Beijing, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt242').html("&nbsp;&nbsp;215").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.215)"});
        $('#pt103').css({"background":"#548B54"})
        $('#pt123').css({"background":"#548B54"})
        $('#pt129').css({"background":"#548B54"})
        $('#pt137').css({"background":"#548B54"})
        });
        
        $('#player26').on('click', function(){
        $('.playerList').removeAttr('style');
        $('#player26').css({"color":"#8E388E","font-size": "1.5vw","font-weight":"bold"});
        $('#chartInTile3').empty();
        $('#chartInTile3').show();       
        drawchartInTile3("Camila Giorgi");
        $('#tableInTile3').css("overflow", "scroll");
        $('.weekh3').show();
        $('.zz').html("");
        $('.yy').html("");
        $('.zz').removeAttr('style');
        $('.yy').removeAttr('style');
        $('#pt200').html("Points Earned");
        $('#pt101').html("&nbsp;&nbsp;Shenzhen, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt201').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt102').html("&nbsp;&nbsp;Sydney, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt202').html("&nbsp;&nbsp;420").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.42)"});
        $('#pt103').html("&nbsp;&nbsp;Melbourne, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt203').html("&nbsp;&nbsp;70").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.07)"});
        $('#pt109').html("&nbsp;&nbsp;Dubai, UAE").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt209').html("&nbsp;&nbsp;26").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.026)"});
        $('#pt113').html("&nbsp;&nbsp;Miami, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt213').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt115').html("&nbsp;&nbsp;Charleston, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt215').html("&nbsp;&nbsp;55").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.055)"});
        $('#pt116').html("&nbsp;&nbsp;Lugano, Switzerland").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt216').html("&nbsp;&nbsp;60").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.06)"});
        $('#pt119').html("&nbsp;&nbsp;Prague, Czechia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt219').html("&nbsp;&nbsp;110").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.11)"});
        $('#pt121').html("&nbsp;&nbsp;Rome, Italy").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt221').html("&nbsp;&nbsp;40").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.04)"});
        $('#pt123').html("&nbsp;&nbsp;Paris, France").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt223').html("&nbsp;&nbsp;130").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.13)"});
        $('#pt126').html("&nbsp;&nbsp;Nottingham, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt226').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt127').html("&nbsp;&nbsp;Birmingham, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt227').html("&nbsp;&nbsp;26").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.026)"});
        $('#pt128').html("&nbsp;&nbsp;Eastbourne, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt228').html("&nbsp;&nbsp;30").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.03)"});
        $('#pt129').html("&nbsp;&nbsp;Wimbledon, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt229').html("&nbsp;&nbsp;430").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.43)"});
        $('#pt135').html("&nbsp;&nbsp;Cincinnati, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt235').html("&nbsp;&nbsp;120").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.12)"});
        $('#pt136').html("&nbsp;&nbsp;New Haven, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt236').html("&nbsp;&nbsp;160").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.16)"});
        $('#pt137').html("&nbsp;&nbsp;New York, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt237').html("&nbsp;&nbsp;70").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.07)"});
        $('#pt140').html("&nbsp;&nbsp;Tokyo, Japan").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt240').html("&nbsp;&nbsp;185").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.185)"});
        $('#pt141').html("&nbsp;&nbsp;Wuhan, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt241').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt143').html("&nbsp;&nbsp;Linz, Austria").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt243').html("&nbsp;&nbsp;280").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.28)"});
        $('#pt103').css({"background":"#548B54"})
        $('#pt123').css({"background":"#548B54"})
        $('#pt129').css({"background":"#548B54"})
        $('#pt137').css({"background":"#548B54"})
        });
        
        $('#player27').on('click', function(){
        $('.playerList').removeAttr('style');
        $('#player27').css({"color":"#8E388E","font-size": "1.5vw","font-weight":"bold"});
        $('#chartInTile3').empty();
        $('#chartInTile3').show();       
        drawchartInTile3("Lesia Tsurenko");
        $('#tableInTile3').css("overflow", "scroll");
        $('.weekh3').show();
        $('.zz').html("");
        $('.yy').html("");
        $('.zz').removeAttr('style');
        $('.yy').removeAttr('style');
        $('#pt200').html("Points Earned");
        $('#pt101').html("&nbsp;&nbsp;Brisbane, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt201').html("&nbsp;&nbsp;55").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.055)"});
        $('#pt102').html("&nbsp;&nbsp;Hobart, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt202').html("&nbsp;&nbsp;110").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.11)"});
        $('#pt103').html("&nbsp;&nbsp;Melbourne, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt203').html("&nbsp;&nbsp;70").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.07)"});
        $('#pt108').html("&nbsp;&nbsp;Doha, Qatar").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt208').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt109').html("&nbsp;&nbsp;Dubai, UAE").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt209').html("&nbsp;&nbsp;50").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.05)"});
        $('#pt110').html("&nbsp;&nbsp;Acapulco, Mexico").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt210').html("&nbsp;&nbsp;280").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.28)"});
        $('#pt111').html("&nbsp;&nbsp;Indian Wells, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt211').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt113').html("&nbsp;&nbsp;Miami, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt213').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt115').html("&nbsp;&nbsp;Monterrey, Mexico").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt215').html("&nbsp;&nbsp;30").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.03)"});
        $('#pt120').html("&nbsp;&nbsp;Madrid, Spain").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt220').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt121').html("&nbsp;&nbsp;Rome, Italy").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt221').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt123').html("&nbsp;&nbsp;Paris, France").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt223').html("&nbsp;&nbsp;240").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.24)"});
        $('#pt127').html("&nbsp;&nbsp;Birmingham, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt227').html("&nbsp;&nbsp;100").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.1)"});
        $('#pt129').html("&nbsp;&nbsp;Wimbledon, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt229').html("&nbsp;&nbsp;70").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.07)"});
        $('#pt134').html("&nbsp;&nbsp;Montreal, Canada").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt234').html("&nbsp;&nbsp;60").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.06)"});
        $('#pt135').html("&nbsp;&nbsp;Cincinnati, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt235').html("&nbsp;&nbsp;190").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.19)"});
        $('#pt137').html("&nbsp;&nbsp;New York, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt237').html("&nbsp;&nbsp;430").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.43)"});
        $('#pt141').html("&nbsp;&nbsp;Wuhan, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt241').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt142').html("&nbsp;&nbsp;Beijing, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt242').html("&nbsp;&nbsp;65").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.065)"});
        $('#pt144').html("&nbsp;&nbsp;Moscow, Russia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt244').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt103').css({"background":"#548B54"})
        $('#pt123').css({"background":"#548B54"})
        $('#pt129').css({"background":"#548B54"})
        $('#pt137').css({"background":"#548B54"})
        });
        
        $('#player28').on('click', function(){
        $('.playerList').removeAttr('style');
        $('#player28').css({"color":"#8E388E","font-size": "1.5vw","font-weight":"bold"});
        $('#chartInTile3').empty();
        $('#chartInTile3').show();       
        drawchartInTile3("Su-Wei Hsieh");
        $('#tableInTile3').css("overflow", "scroll");
        $('.weekh3').show();
        $('.zz').html("");
        $('.yy').html("");
        $('.zz').removeAttr('style');
        $('.yy').removeAttr('style');
        $('#pt200').html("Points Earned");
        $('#pt101').html("&nbsp;&nbsp;Auckland, New Zealand").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt201').html("&nbsp;&nbsp;110").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.11)"});
        $('#pt103').html("&nbsp;&nbsp;Melbourne, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt203').html("&nbsp;&nbsp;240").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.24)"});
        $('#pt108').html("&nbsp;&nbsp;Doha, Qatar").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt208').html("&nbsp;&nbsp;2").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.002)"});
        $('#pt109').html("&nbsp;&nbsp;Dubai, UAE").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt209').html("&nbsp;&nbsp;26").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.026)"});
        $('#pt111').html("&nbsp;&nbsp;Indian Wells, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt211').html("&nbsp;&nbsp;130").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.13)"});
        $('#pt113').html("&nbsp;&nbsp;Miami, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt213').html("&nbsp;&nbsp;65").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.065)"});
        $('#pt116').html("&nbsp;&nbsp;Lugano, Switzerland").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt216').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt118').html("&nbsp;&nbsp;Stuttgart, Germany").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt218').html("&nbsp;&nbsp;26").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.026)"});
        $('#pt119').html("&nbsp;&nbsp;Rabat, Morocco").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt219').html("&nbsp;&nbsp;110").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.11)"});
        $('#pt121').html("&nbsp;&nbsp;Rome, Italy").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt221').html("&nbsp;&nbsp;180").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.18)"});
        $('#pt122').html("&nbsp;&nbsp;Strasbourg, France").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt222').html("&nbsp;&nbsp;60").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.06)"});
        $('#pt123').html("&nbsp;&nbsp;Paris, France").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt223').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt127').html("&nbsp;&nbsp;Mallorca, Spain").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt227').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt128').html("&nbsp;&nbsp;Eastbourne, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt228').html("&nbsp;&nbsp;55").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.055)"});
        $('#pt129').html("&nbsp;&nbsp;Wimbledon, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt229').html("&nbsp;&nbsp;240").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.24)"});
        $('#pt135').html("&nbsp;&nbsp;Cincinnati, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt235').html("&nbsp;&nbsp;2").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.002)"});
        $('#pt136').html("&nbsp;&nbsp;New Haven, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt236').html("&nbsp;&nbsp;26").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.026)"});
        $('#pt137').html("&nbsp;&nbsp;New York, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt237').html("&nbsp;&nbsp;70").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.07)"});
        $('#pt139').html("&nbsp;&nbsp;Hiroshima, Japan").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt239').html("&nbsp;&nbsp;280").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.28)"});
        $('#pt140').html("&nbsp;&nbsp;Seoul, Korea").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt240').html("&nbsp;&nbsp;110").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.11)"});
        $('#pt141').html("&nbsp;&nbsp;Wuhan, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt241').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt142').html("&nbsp;&nbsp;Beijing, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt242').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt143').html("&nbsp;&nbsp;Tianjin, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt243').html("&nbsp;&nbsp;110").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.11)"});
        $('#pt103').css({"background":"#548B54"})
        $('#pt123').css({"background":"#548B54"})
        $('#pt129').css({"background":"#548B54"})
        $('#pt137').css({"background":"#548B54"})
        });
        
        $('#player29').on('click', function(){
        $('.playerList').removeAttr('style');
        $('#player29').css({"color":"#8E388E","font-size": "1.5vw","font-weight":"bold"});
        $('#chartInTile3').empty();
        $('#chartInTile3').show();       
        drawchartInTile3("Maria Sharapova");
        $('#tableInTile3').css("overflow", "scroll");
        $('.weekh3').show();
        $('.zz').html("");
        $('.yy').html("");
        $('.zz').removeAttr('style');
        $('.yy').removeAttr('style');
        $('#pt200').html("Points Earned");
        $('#pt101').html("&nbsp;&nbsp;Shenzhen, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt201').html("&nbsp;&nbsp;110").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.11)"});
        $('#pt103').html("&nbsp;&nbsp;Melbourne, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt203').html("&nbsp;&nbsp;130").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.13)"});
        $('#pt108').html("&nbsp;&nbsp;Doha, Qatar").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt208').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt111').html("&nbsp;&nbsp;Indian Wells, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt211').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt118').html("&nbsp;&nbsp;Stuttgart, Germany").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt218').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt120').html("&nbsp;&nbsp;Madrid, Spain").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt220').html("&nbsp;&nbsp;215").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.215)"});
        $('#pt121').html("&nbsp;&nbsp;Rome, Italy").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt221').html("&nbsp;&nbsp;350").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.35)"});
        $('#pt123').html("&nbsp;&nbsp;Paris, France").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt223').html("&nbsp;&nbsp;430").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.43)"});
        $('#pt129').html("&nbsp;&nbsp;Wimbledon, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt229').html("&nbsp;&nbsp;10").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.01)"});
        $('#pt134').html("&nbsp;&nbsp;Montreal, Canada").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt234').html("&nbsp;&nbsp;105").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.105)"});
        $('#pt137').html("&nbsp;&nbsp;New York, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt237').html("&nbsp;&nbsp;240").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.24)"});
        $('#pt103').css({"background":"#548B54"})
        $('#pt123').css({"background":"#548B54"})
        $('#pt129').css({"background":"#548B54"})
        $('#pt137').css({"background":"#548B54"})
        });
        
        $('#player30').on('click', function(){
        $('.playerList').removeAttr('style');
        $('#player30').css({"color":"#8E388E","font-size": "1.5vw","font-weight":"bold"});
        $('#chartInTile3').empty();
        $('#chartInTile3').show();       
        drawchartInTile3("Aliaksandra Sasnovich");
        $('#tableInTile3').css("overflow", "scroll");
        $('.weekh3').show();
        $('.zz').html("");
        $('.yy').html("");
        $('.zz').removeAttr('style');
        $('.yy').removeAttr('style');
        $('#pt200').html("Points Earned");
        $('#pt101').html("&nbsp;&nbsp;Brisbane, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt201').html("&nbsp;&nbsp;660").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.66)"});
        $('#pt103').html("&nbsp;&nbsp;Melbourne, Australia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt203').html("&nbsp;&nbsp;130").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.13)"});
        $('#pt109').html("&nbsp;&nbsp;Budapest, Hungary").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt209').html("&nbsp;&nbsp;30").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.03)"});
        $('#pt111').html("&nbsp;&nbsp;Indian Wells, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt211').html("&nbsp;&nbsp;65").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.065)"});
        $('#pt113').html("&nbsp;&nbsp;Miami, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt213').html("&nbsp;&nbsp;35").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.035)"});
        $('#pt116').html("&nbsp;&nbsp;Lugano, Switzerland").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt216').html("&nbsp;&nbsp;30").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.03)"});
        $('#pt119').html("&nbsp;&nbsp;Prague, Czechia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt219').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt120').html("&nbsp;&nbsp;Madrid, Spain").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt220').html("&nbsp;&nbsp;65").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.065)"});
        $('#pt121').html("&nbsp;&nbsp;Rome, Italy").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt221').html("&nbsp;&nbsp;2").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.002)"});
        $('#pt123').html("&nbsp;&nbsp;Paris, France").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt223').html("&nbsp;&nbsp;70").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.07)"});
        $('#pt126').html("&nbsp;&nbsp;Den Bosch, Holland").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt226').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt127').html("&nbsp;&nbsp;Mallorca, Spain").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt227').html("&nbsp;&nbsp;1").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.001)"});
        $('#pt129').html("&nbsp;&nbsp;Wimbledon, U.K.").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt229').html("&nbsp;&nbsp;240").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.24)"});
        $('#pt132').html("&nbsp;&nbsp;Moscow, Russia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt232').html("&nbsp;&nbsp;110").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.11)"});
        $('#pt135').html("&nbsp;&nbsp;Cincinnati, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt235').html("&nbsp;&nbsp;60").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.06)"});
        $('#pt136').html("&nbsp;&nbsp;New Haven, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt236').html("&nbsp;&nbsp;160").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.16)"});
        $('#pt137').html("&nbsp;&nbsp;New York, USA").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt237').html("&nbsp;&nbsp;130").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.13)"});
        $('#pt140').html("&nbsp;&nbsp;Tokyo, Japan").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});
        $('#pt240').html("&nbsp;&nbsp;60").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.06)"});
        $('#pt142').html("&nbsp;&nbsp;Beijing, China").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt242').html("&nbsp;&nbsp;65").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.065)"});
        $('#pt144').html("&nbsp;&nbsp;Moscow, Russia").css({"border-style":"dashed","border-width":"thin","border-color":"#39ff14"});	
        $('#pt244').html("&nbsp;&nbsp;100").css({"color":"white","border-style":"dashed","border-width":"thin","border-color":"#39ff14","background":"rgba(16,78,139,0.1)"});
        $('#pt103').css({"background":"#548B54"})
        $('#pt123').css({"background":"#548B54"})
        $('#pt129').css({"background":"#548B54"})
        $('#pt137').css({"background":"#548B54"})
        });
        
        });

        $('.court__dc--right').on('click', function(){

        $('.wrapper').hide();
        $("#courtbutton").show();
        $('#headlineForChart').text(t4);
        $('#tile1').hide();
        $('#tile2').hide();
        $('#tile3').hide();
        $('#tile4').show();
        $('#footnote1').show();
        
        });

        // $('.court__nml--right').on('click', function(){

        // });
        
        $('#courtbutton').on('click', function(){
       
        $('#headlineForChart').text(t0);
        $('.wrapper').show();
        $('#courtbutton').hide();
        $('#tile1').hide();
        $('#tile2').hide();
        $('#tile3').hide();
        $('#tile4').hide();
        $('#footnote1').hide();
        });
        
              
        $('#pt1').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt1').css({"background":"#8E388E"}); 
        $('#pt3').css({"background":"#00868B"}); 
        $('#rect1').css({"width":"131px","height":"30","background":"#00868B"})
        $('#recttext1').html("&nbsp; 3 players traveled 2,625km to Melbourne");
        });
        
        $('#pt2').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt2').css({"background":"#8E388E"});	
        $('#pt3').css({"background":"#39ff14"});	
        $('#rect1').css({"width":"29.9px", "height":"50px", "background": "#39ff14"});	
        $('#recttext1').html("5 players traveled 598 km to Melbourne");
 
        });
        
        $('#pt3').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt3').css({"background":"#8E388E"});	
        $('#pt4').css({"background":"#39ff14"});	
        $('#rect1').css({"width":"699.9px", "height":"10px", "background": "#39ff14"});	
        $('#recttext1').html("1 player traveled 13998 km to Midland");
        $('#pt3').css({"background":"#8E388E"});	
        $('#pt6').css({"background":"#00868B"});	
        $('#rect2').css({"width":"599px", "height":"150px", "background": "#00868B"});	
        $('#recttext2').html("15 players traveled 11980 km to Doha");
        $('#pt3').css({"background":"#8E388E"});	
        $('#pt5').css({"background":"#00868B"});	
        $('#rect3').css({"width":"745.45px", "height":"80px", "background": "#00868B"});	
        $('#recttext3').html("8 players traveled 14909 km to St. Petersburg");
        $('#pt3').css({"background":"#8E388E"});	
        $('#pt41').css({"background":"#00868B"});	
        $('#rect4').css({"width":"583.35px", "height":"20px", "background": "#00868B"});	
        $('#recttext4').html("2 players traveled 11667 km to Dubai");
        $('#pt3').css({"background":"#8E388E"});	
        $('#pt7').css({"background":"#00868B"});	
        $('#rect5').css({"width":"777.9px", "height":"10px", "background": "#00868B"});	
        $('#recttext5').html("1 player traveled 15558 km to Budapest");
        $('#pt3').css({"background":"#8E388E"});	
        $('#pt8').css({"background":"#00868B"});	
        $('#rect6').css({"width":"666.85px", "height":"10px", "background": "#00868B"});	
        $('#recttext6').html("1 player traveled 13337 km to Acapulco");
        $('#pt3').css({"background":"#8E388E"});	
        $('#pt9').css({"background":"#00868B"});	
        $('#rect7').css({"width":"645.45px", "height":"10px", "background": "#00868B"});	
        $('#recttext7').html("1 player traveled 12909 km to Indian Wells");
        });
        
        $('#pt4').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt4').css({"background":"#8E388E"});	
        $('#pt6').css({"background":"#00868B"});	
        $('#rect1').css({"width":"652.85px", "height":"10px", "background": "#00868B"});	
        $('#recttext1').html("1 player traveled 13057 km to Doha");
        });
        
        $('#pt5').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt5').css({"background":"#8E388E"});	
        $('#pt6').css({"background":"#00868B"});	
        $('#rect1').css({"width":"209.25px", "height":"70px", "background": "#00868B"});	
        $('#recttext1').html("7 players traveled 4185 km to Doha");
        $('#pt5').css({"background":"#8E388E"});	
        $('#pt41').css({"background":"#00868B"});	
        $('#rect2').css({"width":"215.35px", "height":"10px", "background": "#00868B"});	
        $('#recttext2').html("1 player traveled 4307 km to Dubai");
        });
        
        $('#pt6').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt6').css({"background":"#8E388E"});	
        $('#pt41').css({"background":"#39ff14"});	
        $('#rect1').css({"width":"18.9px", "height":"150px", "background": "#39ff14"});	
        $('#recttext1').html("15 players traveled 378 km to Dubai");
        $('#pt6').css({"background":"#8E388E"});	
        $('#pt7').css({"background":"#39ff14"});	
        $('#rect2').css({"width":"188.35px", "height":"20px", "background": "#39ff14"});	
        $('#recttext2').html("2 players traveled 3767 km to Budapest");
        $('#pt6').css({"background":"#8E388E"});	
        $('#pt9').css({"background":"#00868B"});	
        $('#rect3').css({"width":"666.5px", "height":"60px", "background": "#00868B"});	
        $('#recttext3').html("6 players traveled 13330 km to Indian Wells");
        });
        
        $('#pt7').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt7').css({"background":"#8E388E"});	
        $('#pt9').css({"background":"#00868B"});	
        $('#rect1').css({"width":"497.35px", "height":"30px", "background": "#00868B"});	
        $('#recttext1').html("3 players traveled 9947 km to Indian Wells");
        });
        
        $('#pt8').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt8').css({"background":"#8E388E"});	
        $('#pt9').css({"background":"#39ff14"});	
        $('#rect1').css({"width":"124.6px", "height":"20px", "background": "#39ff14"});	
        $('#recttext1').html("2 players traveled 2492 km to Indian Wells");
        });
        
        $('#pt9').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt9').css({"background":"#8E388E"});	
        $('#pt10').css({"background":"#39ff14"});	
        $('#rect1').css({"width":"178.9px", "height":"270px", "background": "#39ff14"});
        $('#recttext1').html("27 players traveled 3578 km to Miami");
        $('#pt9').css({"background":"#8E388E"});	
        $('#pt45').css({"background":"#00868B"});	
        $('#rect2').css({"width":"474.65px", "height":"10px", "background": "#00868B"});	
        $('#recttext2').html("1 player traveled 9493 km to Rabat");
        $('#pt9').css({"background":"#8E388E"});	
        $('#pt44').css({"background":"#00868B"});	
        $('#rect3').css({"width":"468.7px", "height":"10px", "background": "#00868B"});	
        $('#recttext3').html("1 player traveled 9374 km to Stuttgart");
        });
        
        $('#pt10').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt10').css({"background":"#8E388E"});	
        $('#pt11').css({"background":"#39ff14"});	
        $('#rect1').css({"width":"38.95px", "height":"110px", "background": "#39ff14"});	
        $('#recttext1').html("11 players traveled 779 km to Charleston");
        $('#pt10').css({"background":"#8E388E"});	
        $('#pt42').css({"background":"#39ff14"});	
        $('#rect2').css({"width":"100.65px", "height":"20px", "background": "#39ff14"});	
        $('#recttext2').html("2 players traveled 2013 km to Monterrey");
        $('#pt10').css({"background":"#8E388E"});	
        $('#pt44').css({"background":"#00868B"});	$('#rect3').css({"width":"392.05px", "height":"70px", "background": "#00868B"});	
        $('#recttext3').html("7 players traveled 7841 km to Stuttgart");
        $('#pt10').css({"background":"#8E388E"});	
        $('#pt43').css({"background":"#00868B"});	$('#rect4').css({"width":"395.9px", "height":"50px", "background": "#00868B"});	
        $('#recttext4').html("5 players traveled 7918 km to Lugano");
        $('#pt10').css({"background":"#8E388E"});	
        $('#pt13').css({"background":"#00868B"});	$('#rect5').css({"width":"480.5px", "height":"20px", "background": "#00868B"});	
        $('#recttext5').html("2 players traveled 9610 km to Istanbul");
        $('#pt10').css({"background":"#8E388E"});	
        $('#pt18').css({"background":"#00868B"});	
        $('#rect6').css({"width":"367.75px", "height":"10px", "background": "#00868B"});	
        $('#recttext6').html("1 player traveled 7355 km to Paris");
        });
        
        $('#pt11').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt11').css({"background":"#8E388E"});	
        $('#pt43').css({"background":"#39ff14"});	
        $('#rect1').css({"width":"369px", "height":"20px", "background": "#39ff14"});	
        $('#recttext1').html("2 players traveled 7380 km to Lugano");
        $('#pt11').css({"background":"#8E388E"});	
        $('#pt44').css({"background":"#00868B"});	
        $('#rect2').css({"width":"363.75px", "height":"60px", "background": "#00868B"});	
        $('#recttext2').html("6 players traveled 7275 km to Stuttgart");
        $('#pt11').css({"background":"#8E388E"});	
        $('#pt15').css({"background":"#00868B"});	
        $('#rect3').css({"width":"332.35px", "height":"30px", "background": "#00868B"});	
        $('#recttext3').html("3 players traveled 6647 km to Madrid");
        });
        
        $('#pt13').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt13').css({"background":"#8E388E"});	
        $('#pt14').css({"background":"#39ff14"});	
        $('#rect1').css({"width":"75.6px", "height":"10px", "background": "#39ff14"});	
        $('#recttext1').html("1 player traveled 1512 km to Prague");
        $('#pt13').css({"background":"#8E388E"});	
        $('#pt15').css({"background":"#00868B"});	
        $('#rect2').css({"width":"136.9px", "height":"20px", "background": "#00868B"});	
        $('#recttext2').html("2 players traveled 2738 km to Madrid");
        });
        
        $('#pt14').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt14').css({"background":"#8E388E"});	
        $('#pt15').css({"background":"#39ff14"});	
        $('#rect1').css({"width":"88.6px", "height":"50px", "background": "#39ff14"});	
        $('#recttext1').html("5 players traveled 1772 km to Madrid");
        $('#pt14').css({"background":"#8E388E"});	
        $('#pt16').css({"background":"#00868B"});	
        $('#rect2').css({"width":"46.15px", "height":"10px", "background": "#00868B"});	
        $('#recttext2').html("1 player traveled 923 km to Rome");
        });
        
        $('#pt15').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt15').css({"background":"#8E388E"});	
        $('#pt16').css({"background":"#39ff14"});	
        $('#rect1').css({"width":"68.15px", "height":"220px", "background": "#39ff14"});	
        $('#recttext1').html("22 players traveled 1363 km to Rome");
        $('#pt15').css({"background":"#8E388E"});	
        $('#pt18').css({"background":"#00868B"});	
        $('#rect2').css({"width":"52.6px", "height":"20px", "background": "#00868B"});	
        $('#recttext2').html("2 players traveled 1052 km to Paris");
        $('#pt15').css({"background":"#8E388E"});	
        $('#pt17').css({"background":"#00868B"});	
        $('#rect3').css({"width":"76.6px", "height":"10px", "background": "#00868B"});	
        $('#recttext3').html("1 player traveled 1532 km to Nuernberg");
        });
        
        $('#pt16').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt16').css({"background":"#8E388E"});	
        $('#pt46').css({"background":"#39ff14"});	
        $('#rect1').css({"width":"41.55px", "height":"50px", "background": "#39ff14"});	
        $('#recttext1').html("5 players traveled 831 km to Strasbourg");
        $('#pt16').css({"background":"#8E388E"});	
        $('#pt17').css({"background":"#39ff14"});	
        $('#rect2').css({"width":"42.4px", "height":"20px", "background": "#39ff14"});	
        $('#recttext2').html("2 players traveled 848 km to Nuernberg");
        $('#pt16').css({"background":"#8E388E"});	
        $('#pt18').css({"background":"#00868B"});	
        $('#rect3').css({"width":"55.3px", "height":"190px", "background": "#00868B"});	
        $('#recttext3').html("19 players traveled 1106 km to Paris");
        });
        
        $('#pt17').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt17').css({"background":"#8E388E"});	
        $('#pt18').css({"background":"#39ff14"});	
        $('#rect1').css({"width":"31.9px", "height":"30px", "background": "#39ff14"});	
        $('#recttext1').html("3 players traveled 638 km to Paris");
        });
        
        $('#pt18').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt18').css({"background":"#8E388E"});	
        $('#pt20').css({"background":"#00868B"});	
        $('#rect1').css({"width":"25.05px", "height":"80px", "background": "#00868B"});	
        $('#recttext1').html("8 players traveled 501 km to Birmingham");
        $('#pt18').css({"background":"#8E388E"});	
        $('#pt22').css({"background":"#00868B"});	
        $('#rect2').css({"width":"16.9px", "height":"60px", "background": "#00868B"});	
        $('#recttext2').html("6 players traveled 338 km to Wimbledon");
        $('#pt18').css({"background":"#8E388E"});	
        $('#pt48').css({"background":"#00868B"});	
        $('#rect3').css({"width":"51.6px", "height":"50px", "background": "#00868B"});	
        $('#recttext3').html("5 players traveled 1032 km to Mallorca");
        $('#pt18').css({"background":"#8E388E"});	
        $('#pt47').css({"background":"#00868B"});	
        $('#rect4').css({"width":"18.9px", "height":"50px", "background": "#00868B"});	
        $('#recttext4').html("5 players traveled 378 km to S-Hertogenbosch");
        $('#pt18').css({"background":"#8E388E"});	
        $('#pt19').css({"background":"#00868B"});	
        $('#rect5').css({"width":"25.85px", "height":"40px", "background": "#00868B"});	
        $('#recttext5').html("4 players traveled 517 km to Nottingham");
        $('#pt18').css({"background":"#8E388E"});	
        $('#pt21').css({"background":"#00868B"});	
        $('#rect6').css({"width":"12.95px", "height":"20px", "background": "#00868B"});	
        $('#recttext6').html("2 players traveled 259 km to Eastbourne");
        });
        
        $('#pt19').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt19').css({"background":"#8E388E"});	
        $('#pt20').css({"background":"#39ff14"});	
        $('#rect1').css({"width":"3.6px", "height":"40px", "background": "#39ff14"});	
        $('#recttext1').html("4 players traveled 72 km to Birmingham");
        });
        
        $('#pt20').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt20').css({"background":"#8E388E"});	
        $('#pt21').css({"background":"#39ff14"});	
        $('#rect1').css({"width":"12.1px", "height":"90px", "background": "#39ff14"});	
        $('#recttext1').html("9 players traveled 242 km to Eastbourne");
        $('#pt20').css({"background":"#8E388E"});	
        $('#pt22').css({"background":"#00868B"});	
        $('#rect2').css({"width":"8.25px", "height":"40px", "background": "#00868B"});	
        $('#recttext2').html("4 players traveled 165 km to Wimbledon");
        });
        
        $('#pt21').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt21').css({"background":"#8E388E"});	
        $('#pt22').css({"background":"#39ff14"});	
        $('#rect1').css({"width":"4px", "height":"170px", "background": "#39ff14"});	
        $('#recttext1').html("17 players traveled 80 km to Wimbledon");
        });
        
        $('#pt22').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt22').css({"background":"#8E388E"});	
        $('#pt23').css({"background":"#39ff14"});	
        $('#rect1').css({"width":"104.7px", "height":"20px", "background": "#39ff14"});	
        $('#recttext1').html("2 players traveled 2094 km to Bucharest");
        $('#pt22').css({"background":"#8E388E"});	
        $('#pt26').css({"background":"#00868B"});	
        $('#rect2').css({"width":"260.9px", "height":"140px", "background": "#00868B"});	
        $('#recttext2').html("14 players traveled 5218 km to Montreal");
        $('#pt22').css({"background":"#8E388E"});	
        $('#pt27').css({"background":"#00868B"});	
        $('#rect3').css({"width":"318.25px", "height":"40px", "background": "#00868B"});	
        $('#recttext3').html("4 players traveled 6365 km to Cincinnati");
        $('#pt22').css({"background":"#8E388E"});	
        $('#pt25').css({"background":"#00868B"});	
        $('#rect4').css({"width":"431.75px", "height":"30px", "background": "#00868B"});	
        $('#recttext4').html("3 players traveled 8635 km to San Jose");
        $('#pt22').css({"background":"#8E388E"});	
        $('#pt24').css({"background":"#00868B"});	
        $('#rect5').css({"width":"125.45px", "height":"30px", "background": "#00868B"});
        $('#recttext5').html("3 players traveled 2509 km to Moscow");
        $('#pt22').css({"background":"#8E388E"});	
        $('#pt51').css({"background":"#00868B"});	
        $('#rect6').css({"width":"294.75px", "height":"20px", "background": "#00868B"});
        $('#recttext6').html("2 players traveled 5895 km to Washington");
        $('#pt22').css({"background":"#8E388E"});	
        $('#pt50').css({"background":"#00868B"});	
        $('#rect7').css({"width":"457.35px", "height":"10px", "background": "#00868B"});	
        $('#recttext7').html("1 player traveled 9147 km to Nanchang");
        $('#pt22').css({"background":"#8E388E"});	
        $('#pt28').css({"background":"#00868B"});	
        $('#rect8').css({"width":"272.75px", "height":"10px", "background": "#00868B"});	
        $('#recttext8').html("1 player traveled 5455 km to New Haven");
        });
        
        $('#pt23').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt23').css({"background":"#8E388E"});	
        $('#pt24').css({"background":"#39ff14"});	
        $('#rect1').css({"width":"74.9px", "height":"10px", "background": "#39ff14"});	
        $('#recttext1').html("1 player traveled 1498 km to Moscow");
        $('#pt23').css({"background":"#8E388E"});	
        $('#pt25').css({"background":"#00868B"});	
        $('#rect2').css({"width":"518.5px", "height":"10px", "background": "#00868B"});	
        $('#recttext2').html("1 player traveled 10370 km to San Jose");
        });
        
        $('#pt24').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt24').css({"background":"#8E388E"});	
        $('#pt26').css({"background":"#00868B"});	
        $('#rect3').css({"width":"352.65px", "height":"30px", "background": "#00868B"});	
        $('#recttext3').html("3 players traveled 7053 km to Montreal");
        $('#pt24').css({"background":"#8E388E"});	
        $('#pt27').css({"background":"#00868B"});	
        $('#rect4').css({"width":"406.9px", "height":"10px", "background": "#00868B"});	
        $('#recttext4').html("1 player traveled 8138 km to Cincinnati");
        });
        
        $('#pt25').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt25').css({"background":"#8E388E"});	
        $('#pt26').css({"background":"#39ff14"});	
        $('#rect1').css({"width":"203.35px", "height":"40px", "background": "#39ff14"});	
        $('#recttext1').html("4 players traveled 4067 km to Montreal");
        $('#pt25').css({"background":"#8E388E"});	
        $('#pt27').css({"background":"#00868B"});	
        $('#rect2').css({"width":"162.35px", "height":"10px", "background": "#00868B"});	
        $('#recttext2').html("1 player traveled 3247 km to Cincinnati");
        });
        
        $('#pt26').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt26').css({"background":"#8E388E"});	
        $('#pt27').css({"background":"#39ff14"});	
        $('#rect1').css({"width":"57.3px", "height":"190px", "background": "#39ff14"});	
        $('#recttext1').html("19 players traveled 1146 km to Cincinnati");
        $('#pt26').css({"background":"#8E388E"});	
        $('#pt29').css({"background":"#00868B"});	
        $('#rect2').css({"width":"26.45px", "height":"30px", "background": "#00868B"});	
        $('#recttext2').html("3 players traveled 529 km to New York");
        $('#pt26').css({"background":"#8E388E"});	
        $('#pt33').css({"background":"#00868B"});	
        $('#rect3').css({"width":"523.15px", "height":"10px", "background": "#00868B"});	
        $('#recttext3').html("1 player traveled 10463 km to Beijing");
        });
        
        $('#pt27').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt27').css({"background":"#8E388E"});	
        $('#pt28').css({"background":"#39ff14"});	
        $('#rect1').css({"width":"50.65px", "height":"100px", "background": "#39ff14"});	
        $('#recttext1').html("10 players traveled 1013 km to New Haven");
        $('#pt27').css({"background":"#8E388E"});	
        $('#pt29').css({"background":"#00868B"});	
        $('#rect2').css({"width":"46.4px", "height":"150px", "background": "#00868B"});	
        $('#recttext2').html("15 players traveled 928 km to New York");
        });
        
        $('#pt28').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt28').css({"background":"#8E388E"});	
        $('#pt29').css({"background":"#39ff14"});	
        $('#rect1').css({"width":"4.9px", "height":"110px", "background": "#39ff14"});	
        $('#recttext1').html("11 players traveled 98 km to New York");
        });
        
        $('#pt29').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt29').css({"background":"#8E388E"});
        $('#pt30').css({"background":"#39ff14"});	
        $('#rect1').css({"width":"561.85px", "height":"20px", "background": "#39ff14"});	
        $('#recttext1').html("2 players traveled 11237 km to Hiroshima");
        $('#pt29').css({"background":"#8E388E"});	
        $('#pt52').css({"background":"#39ff14"});	
        $('#rect2').css({"width":"35.25px", "height":"10px", "background": "#39ff14"});	
        $('#recttext2').html("1 player traveled 705 km to Quebec City");
        $('#pt29').css({"background":"#8E388E"});	
        $('#pt54').css({"background":"#00868B"});	
        $('#rect3').css({"width":"601.95px", "height":"110px", "background": "#00868B"});	
        $('#recttext3').html("11 players traveled 12039 km to Wuhan");
        $('#pt29').css({"background":"#8E388E"});	
        $('#pt58').css({"background":"#00868B"});	
        $('#rect4').css({"width":"542.45px", "height":"110px", "background": "#00868B"});	
        $('#recttext4').html("11 players traveled 10849 km to Tokyo");
        $('#pt29').css({"background":"#8E388E"});	
        $('#pt53').css({"background":"#00868B"});	
        $('#rect5').css({"width":"552.55px", "height":"20px", "background": "#00868B"});	
        $('#recttext5').html("2 players traveled 11051 km to Seoul");
        });
        
        $('#pt30').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
      	
        $('#pt31').css({"background":"#39ff14"});	
        $('#rect1').css({"width":"112.05px", "height":"10px", "background": "#39ff14"});	
        $('#recttext1').html("1 player traveled 2241 km to Guangzhou");
        $('#pt30').css({"background":"#8E388E"});	
        $('#pt53').css({"background":"#39ff14"});	
        $('#rect2').css({"width":"30.15px", "height":"10px", "background": "#39ff14"});	
        $('#recttext2').html("1 player traveled 603 km to Seoul");
        });
        
        $('#pt31').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt31').css({"background":"#8E388E"});	
        $('#pt54').css({"background":"#39ff14"});	
        $('#rect1').css({"width":"41.7px", "height":"10px", "background": "#39ff14"});	
        $('#recttext1').html("1 player traveled 834 km to Wuhan");
        });
        
        $('#pt33').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt33').css({"background":"#8E388E"});	
        $('#pt34').css({"background":"#39ff14"});	
        $('#rect1').css({"width":"98.65px", "height":"40px", "background": "#39ff14"});	
        $('#recttext1').html("4 players traveled 1973 km to Hong Kong");
        $('#pt33').css({"background":"#8E388E"});	
        $('#pt59').css({"background":"#39ff14"});	
        $('#rect2').css({"width":"5.6px", "height":"40px", "background": "#39ff14"});	
        $('#recttext2').html("4 players traveled 112 km to Tianjin");
        $('#pt33').css({"background":"#8E388E"});	
        $('#pt55').css({"background":"#39ff14"});	
        $('#rect3').css({"width":"378.8px", "height":"20px", "background": "#39ff14"});	
        $('#recttext3').html("2 players traveled 7576 km to Linz");
        $('#pt33').css({"background":"#8E388E"});	
        $('#pt56').css({"background":"#00868B"});	
        $('#rect4').css({"width":"289.5px", "height":"70px", "background": "#00868B"});	
        $('#recttext4').html("7 players traveled 5790 km to Moscow");
        $('#pt33').css({"background":"#8E388E"});	
        $('#pt36').css({"background":"#00868B"});	
        $('#rect5').css({"width":"224px", "height":"40px", "background": "#00868B"});	
        $('#recttext5').html("4 players traveled 4480 km to Singapore");
        $('#pt33').css({"background":"#8E388E"});	
        $('#pt35').css({"background":"#00868B"});	
        $('#rect6').css({"width":"397.65px", "height":"10px", "background": "#00868B"});	
        $('#recttext6').html("1 player traveled 7953 km to Luxembourg");
        $('#pt33').css({"background":"#8E388E"});	
        $('#pt37').css({"background":"#00868B"});	
        $('#rect7').css({"width":"85.6px", "height":"10px", "background": "#00868B"});	
        $('#recttext7').html("1 player traveled 1712 km to Zhuhai");
        });
        
        $('#pt34').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt34').css({"background":"#8E388E"});	
        $('#pt35').css({"background":"#39ff14"});	
        $('#rect1').css({"width":"467.4px", "height":"10px", "background": "#39ff14"});	
        $('#recttext1').html("1 player traveled 9348 km to Luxembourg");
        $('#pt34').css({"background":"#8E388E"});	
        $('#pt36').css({"background":"#00868B"});	
        $('#rect2').css({"width":"129.35px", "height":"10px", "background": "#00868B"});	
        $('#recttext2').html("1 player traveled 2587 km to Singapore");
        $('#pt34').css({"background":"#8E388E"});	
        $('#pt37').css({"background":"#00868B"});	
        $('#rect3').css({"width":"40.65px", "height":"10px", "background": "#00868B"});	
        $('#recttext3').html("1 player traveled 813 km to Zhuhai");
        });
        
        $('#pt35').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt35').css({"background":"#8E388E"});	
        $('#pt37').css({"background":"#00868B"});	
        $('#rect1').css({"width":"477.35px", "height":"20px", "background": "#00868B"});	
        $('#recttext1').html("2 players traveled 9547 km to Zhuhai");
        });
        
        $('#pt38').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt38').css({"background":"#8E388E"});	
        $('#pt39').css({"background":"#39ff14"});	
        $('#rect1').css({"width":"36.65px", "height":"70px", "background": "#39ff14"});	
        $('#recttext1').html("7 players traveled 733 km to Sydney");
        $('#pt38').css({"background":"#8E388E"});	
        $('#pt2').css({"background":"#39ff14"});	
        $('#rect2').css({"width":"89.45px", "height":"10px", "background": "#39ff14"});	
        $('#recttext2').html("1 player traveled 1789 km to Hobart");
        $('#pt38').css({"background":"#8E388E"});	
        $('#pt3').css({"background":"#00868B"});	
        $('#rect3').css({"width":"68.7px", "height":"50px", "background": "#00868B"});	
        $('#recttext3').html("5 players traveled 1374 km to Melbourne");
        });
        
        $('#pt39').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt39').css({"background":"#8E388E"});	
        $('#pt3').css({"background":"#39ff14"});	
        $('#rect1').css({"width":"35.6px", "height":"130px", "background": "#39ff14"});	
        $('#recttext1').html("13 players traveled 712 km to Melbourne");
        });
        
        $('#pt41').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt41').css({"background":"#8E388E"});
        $('#pt8').css({"background":"#39ff14"});	
        $('#rect1').css({"width":"730.65px", "height":"10px", "background": "#39ff14"});	
        $('#recttext1').html("1 player traveled 14613 km to Acapulco");
        $('#pt41').css({"background":"#8E388E"});	
        $('#pt9').css({"background":"#00868B"});
        $('#rect3').css({"width":"669.8px", "height":"150px", "background": "#00868B"});
        $('#recttext3').html("15 players traveled 13396 km to Indian Wells");
        $('#pt41').css({"background":"#8E388E"});
        $('#pt10').css({"background":"#00868B"});
        $('#rect4').css({"width":"629.75px", "height":"10px", "background": "#00868B"});
        $('#recttext4').html("1 player traveled 12595 km to Miami");
        });
        
        $('#pt42').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt42').css({"background":"#8E388E"});	
        $('#pt44').css({"background":"#00868B"});	
        $('#rect1').css({"width":"459.6px", "height":"10px", "background": "#00868B"});	
        $('#recttext1').html("1 player traveled 9192 km to Stuttgart");
        $('#pt42').css({"background":"#8E388E"});	
        $('#pt15').css({"background":"#00868B"});	
        $('#rect2').css({"width":"435.6px", "height":"10px", "background": "#00868B"});	
        $('#recttext2').html("1 player traveled 8712 km to Madrid");
        });
        
        $('#pt43').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt43').css({"background":"#8E388E"});	
        $('#pt14').css({"background":"#00868B"});	
        $('#rect1').css({"width":"30.45px", "height":"30px", "background": "#00868B"});	
        $('#recttext1').html("3 players traveled 609 km to Prague");
        $('#pt43').css({"background":"#8E388E"});	
        $('#pt44').css({"background":"#00868B"});	
        $('#rect2').css({"width":"15.45px", "height":"20px", "background": "#00868B"});	
        $('#recttext2').html("2 players traveled 309 km to Stuttgart");
        $('#pt43').css({"background":"#8E388E"});	
        $('#pt45').css({"background":"#00868B"});	
        $('#rect3').css({"width":"94.3px", "height":"10px", "background": "#00868B"});	
        $('#recttext3').html("1 player traveled 1886 km to Rabat");
        $('#pt43').css({"background":"#8E388E"});	
        $('#pt13').css({"background":"#00868B"});	
        $('#rect4').css({"width":"85.05px", "height":"10px", "background": "#00868B"});	
        $('#recttext4').html("1 player traveled 1701 km to Istanbul");
        });
        
        $('#pt44').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt44').css({"background":"#8E388E"});	
        $('#pt14').css({"background":"#39ff14"});	
        $('#rect1').css({"width":"20.25px", "height":"20px", "background": "#39ff14"});	
        $('#recttext1').html("2 players traveled 405 km to Prague");
        $('#pt44').css({"background":"#8E388E"});	
        $('#pt45').css({"background":"#39ff14"});	
        $('#rect2').css({"width":"105.3px", "height":"10px", "background": "#39ff14"});	
        $('#recttext2').html("1 player traveled 2106 km to Rabat");
        $('#pt44').css({"background":"#8E388E"});	
        $('#pt15').css({"background":"#00868B"});	
        $('#rect3').css({"width":"68.8px", "height":"120px", "background": "#00868B"});	
        $('#recttext3').html("12 players traveled 1376 km to Madrid");
        $('#pt44').css({"background":"#8E388E"});	
        $('#pt16').css({"background":"#00868B"});	
        $('#rect4').css({"width":"40.4px", "height":"20px", "background": "#00868B"});	
        $('#recttext4').html("2 players traveled 808 km to Rome");
        });
        
        $('#pt45').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt45').css({"background":"#8E388E"});	
        $('#pt15').css({"background":"#39ff14"});	
        $('#rect1').css({"width":"38.15px", "height":"20px", "background": "#39ff14"});	
        $('#recttext1').html("2 players traveled 763 km to Madrid");
        $('#pt45').css({"background":"#8E388E"});	
        $('#pt16').css({"background":"#00868B"});	
        $('#rect2').css({"width":"95.05px", "height":"10px", "background": "#00868B"});	
        $('#recttext2').html("1 player traveled 1901 km to Rome");
        });
        
        $('#pt46').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt46').css({"background":"#8E388E"});	
        $('#pt18').css({"background":"#39ff14"});	
        $('#rect1').css({"width":"19.85px", "height":"50px", "background": "#39ff14"});	
        $('#recttext1').html("5 players traveled 397 km to Paris");
        });
        
        $('#pt47').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt47').css({"background":"#8E388E"});	
        $('#pt48').css({"background":"#39ff14"});	
        $('#rect1').css({"width":"68.15px", "height":"30px", "background": "#39ff14"});	
        $('#recttext1').html("3 players traveled 1363 km to Mallorca");
        $('#pt47').css({"background":"#8E388E"});	
        $('#pt20').css({"background":"#39ff14"});	
        $('#rect2').css({"width":"24.95px", "height":"10px", "background": "#39ff14"});	
        $('#recttext2').html("1 player traveled 499 km to Birmingham");
        $('#pt47').css({"background":"#8E388E"});	
        $('#pt21').css({"background":"#00868B"});
        $('#rect3').css({"width":"18.2px", "height":"10px", "background": "#00868B"});	
        $('#recttext3').html("1 player traveled 364 km to Eastbourne");
        });
        
            
        $('#pt48').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt48').css({"background":"#8E388E"});	
        $('#pt21').css({"background":"#39ff14"});	
        $('#rect1').css({"width":"66.8px", "height":"50px", "background": "#39ff14"});	
        $('#recttext1').html("5 players traveled 1336 km to Eastbourne");
        $('#pt48').css({"background":"#8E388E"});	
        $('#pt22').css({"background":"#00868B"});	
        $('#rect2').css({"width":"66.8px", "height":"30px", "background": "#00868B"});
        $('#recttext2').html("3 players traveled 1336 km to Wimbledon");
        });
        
        $('#pt50').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt50').css({"background":"#8E388E"});	
        $('#pt25').css({"background":"#39ff14"});	
        $('#rect1').css({"width":"526.2px", "height":"10px", "background": "#39ff14"});	
        $('#recttext1').html("1 player traveled 10524 km to San Jose");
        });
       
        $('#pt51').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt51').css({"background":"#8E388E"});	
        $('#pt26').css({"background":"#39ff14"});	
        $('#rect1').css({"width":"39.45px", "height":"20px", "background": "#39ff14"});	
        $('#recttext1').html("2 players traveled 789 km to Montreal");
        });
        
        $('#pt52').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt52').css({"background":"#8E388E"});	
        $('#pt54').css({"background":"#00868B"});	
        $('#rect1').css({"width":"569.55px", "height":"10px", "background": "#00868B"});	
        $('#recttext1').html("1 player traveled 11391 km to Wuhan");
        });
        
        $('#pt53').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt53').css({"background":"#8E388E"});	
        $('#pt54').css({"background":"#39ff14"});	
        $('#rect1').css({"width":"70.2px", "height":"30px", "background": "#39ff14"});
        $('#recttext1').html("3 players traveled 1404 km to Wuhan");
        });
        
        $('#pt54').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt54').css({"background":"#8E388E"});	
        $('#pt33').css({"background":"#39ff14"});
        $('#rect1').css({"width":"52.85px", "height":"220px", "background": "#39ff14"});
        $('#recttext1').html("22 players traveled 1057 km to Beijing");
        $('#pt54').css({"background":"#8E388E"});	
        $('#pt55').css({"background":"#00868B"});	
        $('#rect2').css({"width":"409.75px", "height":"10px", "background": "#00868B"});
        $('#recttext2').html("1 player traveled 8195 km to Linz");
        $('#pt54').css({"background":"#8E388E"});	
        $('#pt59').css({"background":"#00868B"});
        $('#rect3').css({"width":"49.35px", "height":"10px", "background": "#00868B"});	
        $('#recttext3').html("1 player traveled 987 km to Tianjin");
        $('#pt54').css({"background":"#8E388E"});
        $('#pt37').css({"background":"#00868B"});	
        $('#rect4').css({"width":"46.65px", "height":"10px", "background": "#00868B"});	
        $('#recttext4').html("1 player traveled 933 km to Zhuhai");
        });
        
        $('#pt55').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt55').css({"background":"#8E388E"});	
        $('#pt56').css({"background":"#39ff14"});	
        $('#rect1').css({"width":"89.3px", "height":"10px", "background": "#39ff14"});	
        $('#recttext1').html("1 player traveled 1786 km to Moscow");
        $('#pt55').css({"background":"#8E388E"});	
        $('#pt35').css({"background":"#39ff14"});	
        $('#rect2').css({"width":"30.6px", "height":"10px", "background": "#39ff14"});	
        $('#recttext2').html("1 player traveled 612 km to Luxembourg");
        });
        
        $('#pt56').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt56').css({"background":"#8E388E"});	
        $('#pt36').css({"background":"#39ff14"});	
        $('#rect1').css({"width":"421.4px", "height":"30px", "background": "#39ff14"});	
        $('#recttext1').html("3 players traveled 8428 km to Singapore");
        $('#pt56').css({"background":"#8E388E"});	
        $('#pt37').css({"background":"#00868B"});	
        $('#rect2').css({"width":"367.35px", "height":"40px", "background": "#00868B"});	
        $('#recttext2').html("4 players traveled 7347 km to Zhuhai");
        });
        
        $('#pt57').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt57').css({"background":"#8E388E"});	
        $('#pt2').css({"background":"#39ff14"});	
        $('#rect1').css({"width":"485.95px", "height":"20px", "background": "#39ff14"});	
        $('#recttext1').html("2 players traveled 9719 km to Hobart");
        $('#pt57').css({"background":"#8E388E"});	
        $('#pt39').css({"background":"#39ff14"});	
        $('#rect2').css({"width":"447.55px", "height":"20px", "background": "#39ff14"});	
        $('#recttext2').html("2 players traveled 8951 km to Sydney");
        $('#pt57').css({"background":"#8E388E"});	
        $('#pt3').css({"background":"#00868B"});	
        $('#rect3').css({"width":"456.1px", "height":"30px", "background": "#00868B"});	
        $('#recttext3').html("3 players traveled 9122 km to Melbourne");
        });
        
        $('#pt58').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt58').css({"background":"#8E388E"});	
        $('#pt54').css({"background":"#39ff14"});	
        $('#rect1').css({"width":"121.6px", "height":"90px", "background": "#39ff14"});	
        $('#recttext1').html("9 players traveled 2432 km to Wuhan");
        $('#pt58').css({"background":"#8E388E"});	
        $('#pt33').css({"background":"#00868B"});	
        $('#rect2').css({"width":"104.95px", "height":"20px", "background": "#00868B"});	
        $('#recttext2').html("2 players traveled 2099 km to Beijing");
        });
        
        $('#pt59').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#pt59').css({"background":"#8E388E"});	
        $('#pt56').css({"background":"#39ff14"});	
        $('#rect1').css({"width":"295.1px", "height":"20px", "background": "#39ff14"});	
        $('#recttext1').html("2 players traveled 5902 km to Moscow");
        $('#pt59').css({"background":"#8E388E"});	
        $('#pt37').css({"background":"#00868B"});	
        $('#rect2').css({"width":"80.35px", "height":"20px", "background": "#00868B"});	
        $('#recttext2').html("2 players traveled 1607 km to Zhuhai");
        });
        
        $('#pt12').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#recttext1').html("No top 30 player traveled to Bogota");
        });
        
        $('#pt32').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#recttext1').html("No top 30 player traveled to Tashkent");
        });
        
        $('#pt40').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#recttext1').html("No top 30 player traveled to Taipei");
        });
        
        $('#pt49').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#recttext1').html("No top 30 player traveled to Gstaad");
        });
        
        $('#pt36').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#recttext1').html("Singapore is the Year-End tournament for players ranked 1-8, no next travel");
        });
        
        $('#pt37').on('click', function(){
        
        $('.allt').removeAttr('style');
        $('.rect').removeAttr('style');
        $('#legendrect1').show();$('#legendtext1').show();$('#legendrect2').show();$('#legendtext2').show();
        $('svg').show();
        $('.recttext').text("");
        $('#recttext1').html("Zhuhai is the Year-End tournament for players ranked 9-20, no next travel");
        });
        
        
        });
