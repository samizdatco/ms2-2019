var p1 = 'Tennis is unique from other sports with the fact that there are no "home games" for the players and all tournaments '+
'take place in different cities throughout the world. Players on the Women' + "'" +'s Tennis Association (WTA) tour typically ' + 
'spend 10+ months of the year on the road, which could include weekly change of climates and altitudes.';

var p2 = 'Such frequent travel can lead to the accumulatation of fatigue that could negatively influence performance. ' + 
'Medical professionals state that jet lag, sleep interruptions, and altitude changes ' + 
'can result in mis-coordinated performance, if there is no adequate time for adjustment. ' + 
'The magnitude of this effect is unknown and is explored in this research.'

var p3 = 'The author analyzes the full 2018 tennis season of the WTA for the year-end top 30 players, who are in the best position to overcome the drawbacks of travel because of their: <li>top earnings (e.g. first-class travel)</li> <li>available resources (e.g. physiologists)</li> <li>"smart scheduling" (e.g. cherry-picking tournaments)</li> Data is filtered for cases when players travel in <b>consecutive weeks</b> from one tournament to another in order to expose the effect of travel when there is little time cushion time for recovery.'

var p4 = "All top players compete in the big tournaments, but the choice to go to a smaller one could be dictated by a variety of reasons: <li>tournament is in player's home country/town </li> <li>tournament offers appearance money</li> <li>player is coming back from an injury and needs match play</li> <li>player suffered an unexpected early-round loss and needs more match play, especially before a Grand Slam</li> <li>player is chasing the year-end WTA Finals </li> <li>player is just curious about a place</li>"

var p5 = 'TBD - Discussion'

var p6 = 'TBD - Conclusion & Significance'

var t1 = 'Globe-trotting with tennis: Who traveled the most?'

var t2 = 'The dark side of travel: What are the most frequent routes?'

var t3 = 'Measuring the effect: What is the methodology?'

var t4 = 'Individual choices: Where did players travel?'

var t5 = 'TBD'

var t6 = 'TBD'

$(document).ready(function(){

        $('.withAFewWords').hide();
        $('.charts').hide();


        $('.court__nml--left').on('click', function(){
       
        $('.withAFewWords').show();
        $('#short').text(p1);
        $('.charts').show();
        $('.headlineForChart').text(t1);
        $('#forI').show();
        $('#forII').hide();
        $('#forIII').hide();
    
        });

        $('.court__ad--left').on('click', function(){
       
        $('.withAFewWords').show();
        $('#short').text(p2);
        $('.charts').show();
        $('.headlineForChart').text(t2);
        $('#forI').hide();
        $('#forII').show();
        $('#forIII').hide();
        });

        $('.court__dc--left').on('click', function(){
       
        $('.withAFewWords').show();
        $('#short').html(p3);
        $('.charts').show();
        $('.headlineForChart').text(t3);
        $('#forI').hide();
        $('#forII').hide();
        $('#forIII').show();
        });

        $('.court__ad--right').on('click', function(){
       
        $('.withAFewWords').show();
        $('#short').html(p4);
        $('.charts').show();
        $('.headlineForChart').text(t4);
        $('#forI').hide();
        $('#forII').hide();
        $('#forIII').hide();
        });

        $('.court__dc--right').on('click', function(){
       
        $('.withAFewWords').show();
        $('#short').text(p5);
        $('.charts').show();
        $('.headlineForChart').text(t5);
        $('#forI').hide();
        $('#forII').hide();
        $('#forIII').hide();
        });

        $('.court__nml--right').on('click', function(){
       
        $('.withAFewWords').show();
        $('#short').text(p6);
        $('.charts').show();
        $('.headlineForChart').text(t6);
        $('#forI').hide();
        $('#forII').hide();
        $('#forIII').hide();
        });

        });
