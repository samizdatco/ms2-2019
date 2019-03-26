# Professor Thomas Shapiro
### Monday, March 18th 3:30PM
#### In-Person Interview at the National Community Reinvestment Coalition, Washington DC

---

__RYAN:__ Great.  Again, thanks for chatting today.  I figured a good format for this interview could just kind of be… I would love to talk to kind of like perspectives that I have in my project, kind of like where I&#39;m looking to go within the perspective I&#39;m looking to have.  And then from there, we can kind of talk about the work that you&#39;ve both done and kind of like looking at longitudinal data that came from redlining maps and kind of how that reflects lending behavior of both the FHA and, you know, private entities since the kind of the New Deal era.

It&#39;s kind of where I&#39;m looking to start a lot of my research, and kind of walk you through my perspective and see the tactics you used both on the technical-side to match those zones with census tracts and longitudinal census tracts and also the perspective you had in that analysis to say what you want to look at and how you look at that change over time.

__JASON:__   Okay, yeah.

__RYAN:__  So just for a little brief overview, the perspective I&#39;m looking to take on my project is focused on wealth.  So the way I see the narrative kind of developing is establishing the racial wealth gap that there is today, looking at the factors that go into that and kind of focusing in on housing as the primary or one of the primary factors that leads to the wealth gap and then explaining how was that developed and how white Americans had more access to mortgages and housing opportunities than black Americans, and then kind of using redlining as one lens to talk through where we can see that developed, not developed, and where those kinds of things came to fruition.

__JASON:__   Yeah, makes sense.

__RYAN:__   Yeah, so great to hear that that kind of make sense in my approach.

__JASON:__   Yeah, that&#39;s right in our wheelhouse.

__RYAN:__  Yeah.  That&#39;s why when I when I found out from the report and kind of found this organization, I was very excited because it seemed like the perfect marriage of both like the technical geospatial expertise and the right perspective on saying, &quot;How do we show these effects on kind of current indicators or longitudinal indicators?&quot; Yeah, great.

**[00:02:00]** So I guess I could start kind of on that geospatial-side because I think that&#39;s interesting that I&#39;m running into challenges with [laughter] because I&#39;ve gotten those same mapping, inequality maps, that I think you have linked in a lot of your programs.

__BRUCE:__   Right, yeah.

__RYAN:__  And I&#39;ve used very like kind of brute force or out-of-the-box techniques from python libraries I&#39;ve found to say, &quot;Does this polygon intersect with that polygon?&quot;  But that&#39;s also for only for current census tracts.  So I&#39;m curious your experience and perspective in doing that work and then saying… not only for current census tracts but kind of past census tracts since the 1940&#39;s as well.

__BRUCE:__  So rather than doing a formal alignment of where the neighborhoods are located in the HOLC mapsand current census tracts, we basically rasterized both data sets.

__RYAN:__   Okay.

__BRUCE:__   We basically have a grid ofcells.

__RYAN:__   Okay.

__BRUCE:__  So we categorize the cells within the HOLC maps -- one, two, three, four -- for the categories.

__RYAN:__   Sure.  So those are--

__BRUCE:__   For example, declining and hazardous.

__RYAN:__   Yeah.

__BRUCE:__  Right.  And then we basically did a pixel count of how many of those cells were within the current census tract areas.  So the census tract areas, some of them would be pure.  A lot of them will be mixed, right, where you would have a mix of the different categories.  The ones that were mixed, we categorize those into… ones that have low classifications and ones that have high classifications.  The ones that with categories, you know, for the best and still desirable versus the moments that were declining and hazardous, okay?

So we did this kind of structure, you know, where we had pure pixels, pixels that were mixed.  And then you could have even a greater mix of pixels once you got all four categories in those, right?

**[00:04:00]** So we&#39;ve looked at the ones that were either pure or low… high category, right?  We&#39;re doing rasteranalysis.  And we&#39;re basically doing a numbering scheme and pixel count.  And I can show you this on… It&#39;s at the end of the report where basically it shows, you know, how this was done to produce that.  That was, actually, Juan Franco&#39;sidea about, I guess, with developing state.  He was our geospatial analystat the time, to do that.

__RYAN:__  So then each census tract is essentially still the lowest level down you go in terms of aggregating socioeconomic data.  You just attribute that zone to one… And so if there&#39;s like a mix, half and half, between like, let&#39;s say, the A and B or the C and D zones, do you attribute… Is it in both of those kind of classifications…?

__BRUCE:__   They&#39;d be in a mix count or both.

__RYAN:__   Oh so there&#39;s one category that is just a mixed class.

__BRUCE:__   Or just a mix count or both, yeah.

__RYAN:__  Okay, interesting.  Okay, that makes a lot of sense.  And then you use the tract still as the lowest level of denominator in the analysis.

__BRUCE:__   Yes, we did.  Yeah.

__RYAN:__  How did you approach…? Did you do that also with longitudinal census?  So anytime--

__BRUCE:__  No, we did not use longitudinalcensus.  We used just the census 2010 demographic.  And I think, at that time, we had the ACS 2008 through 2012 that we used at that time.

__RYAN:__  Okay, yeah.  And what would be the kind of characteristics in the census that you looked at that you thought were most important in demonstrating that kind of mirrored effects of what happened today?

__BRUCE:__  So first of, the population.  We looked at race, primarily, Hispanic, African-American and white.  And then we divided the census tracts into &quot;Majority-Minority.&quot;  **[00:06:00]** If there were more than 50 percent minority, they were classified as &quot;Majority.&quot;

__RYAN:__  So the population distribution, then became essentially a flag for &quot;Are you a majority-minority or are you not?&quot;

__BRUCE:__   Yes, that&#39;s right.

__RYAN:__   Okay, cool.

__BRUCE:__  Yeah.  For the income, we use this a lot because we deal with FFIEC --&quot;Federal Financial Institutions Examination Council&quot; -- categories for low, moderate, middle and upper income.  These are the standard categories that are used in CRA Examinations which... or organizations reallygoing towards CRA Examinations quite a bit because CRA is… Community Reinvestment Act is the purpose of the organization.  So we were interested in that sort of categorization of income.

__RYAN:__   Okay.

__BRUCE:__  Right?  So the low category tracks the median household income.  That&#39;s 50 percent or below for the entire metro area.

__RYAN:__  Okay.  And so, that 50 percent delineation is done by… each tract is given the median then those are ranked and it&#39;s the percentile of the tract.

__BRUCE:__   That&#39;s right.

__RYAN:__   Okay.

__BRUCE:__  That&#39;s right.  So we divided all the tracts up by median household income into low, moderate, middle, up.

__RYAN:__   Yeah, okay.

__JASON:__   So &quot;Low&quot; is 50 percent.  &quot;Moderate&quot; is 80 percent or less.

__RYAN:__   80 to 50.

__JASON:__  Yes, correct.  So the terminology is &quot;LMI&quot; and it&#39;s real common with a lot of housing-related discussions -- how itdefines it as a low to moderate income and then middle or upper income.  MUIwould be 80 to 120… or 120 and above is upper income.  But the LMI status is important for CRA purposes.  It&#39;s what the banks use.  And the FFIEC uses their own custom census calculations.  You have to determine eligibility for a lot of those things.

__RYAN:__   Okay.

__JASON:__  In that space, that&#39;s kind of the standard official.

__RYAN:__  Yeah.

__BRUCE:__  **[00:08:00]** And I think they were using the ACS 2008 and 2012 at that time.  I think they were using it.  I forget.  But yeah, probably.

__JASON:__  Yeah.

__RYAN:__   Yeah.

__BRUCE:__   They tend to be a few years behind it, actually, yeah.

__RYAN:__  And those categories that are used for kind of who is eligible for certain programs or certain relief, I assume that&#39;s what this… because I&#39;m still relatively new to learning about the space.

__BRUCE:__   Right.  Yeah, that&#39;s fine.

__RYAN:__  It seems like… the under 50 percent or 50 to 80 would be more or less eligible for certain programs, certain kind of terms on loans that come from the FHAright now.  Is that the case or…?

__JASON:__  No, not really.  So banks are looking for… Under CRA, they&#39;re required to make a certain number of investments in low to moderate income areas.  And when they get their exam every three years, the banks are expected to show.  They observe low to moderate-income communities and low to moderate-income borrowers.  So they&#39;ve got a vested interest of being able to accurately define what low to moderate income means and what census tracts are low to moderate-income.

__RYAN:__   Yeah.

__JASON:__  So the Philly Fed released a study.  It was two years ago now where they looked at the Philadelphia area where a recalculation of income… of metro level incomes, to put it simply, changed the math on a lot of communities.  So the neighborhood that had been below that 80 percent threshold, when they recalculated it, all of a sudden, those communities were above that 80 percent threshold.

__RYAN:__   Right.

__JASON:__  And they looked over time and well, the difference was in investment.  What they found was, up to like 20 percent less investment by banks making loans in those communities because for banks, it changes the profit motivation, right?

__RYAN:__   Right.

__JASON:__  So, you know, if they&#39;re getting credit towards a regulatory goal they have to meet, they&#39;re more likely to make extra effort to make loans in those communities.  As soon as that regulatory goal was… would it make sense…

__RYAN:__   No, makes sense to--

__JASON:__  …that it&#39;s just profit motive?  And if a loan doesn&#39;t makes sense on its own merits then they weren&#39;t willing to do it.

__RYAN:__   Right.

__JASON:__  So that&#39;s not unusual.  Now, yes, there are other programs like if I&#39;m… **[00:10:00]** You know, you might see offers for other types of programs that are depending on LMI where the borrower has to qualify.  FHA wouldn&#39;t be it because anybody could qualify for FHA.

__RYAN:__   Sure.

__BRUCE:__   But HUD I think uses it don&#39;t they?

__JASON:__  HUD uses them for different programs as well  I can&#39;t think of any offhand.  That&#39;ll be easy to explain.

__RYAN:__  Right.

__JASON:__  Yeah, but that&#39;s kind of a threshold that&#39;s used for a lot of different programs.  But in this case… because it&#39;s HUDs kind of standard.  You know, language, right?

__RYAN:__  Mm-hmm.

__JASON:__  But it&#39;s also… Our interest was, are these low to moderate income communities today?  Meaning, then… okay, banks have a greater obligation to lend to these communities. So that&#39;s what we&#39;re interested in.  And we also wanted to see what the correlation was with the redlining.

__RYAN:__  Right.  Because that&#39;s an approach that made sense which was… the redlining maps are kind of… the Rosetta Stone or the lens into what the structure was like at the time.  And those red zones or yellow zones are more likely to be majority-minority and/or lower to moderate income.

__JASON:__   Yeah, sure.

__RYAN:__  So it&#39;s just kind of seeing… Is that reflected in what&#39;s the current landscape today?

__JASON:__  Yeah, and it is.  But I think the exceptions, I think, are more interesting.  You can look at areas that have gentrified or… Like Baltimore&#39;s Inner Harbor, okay, is a great example.  -- You&#39;re in New York?  You&#39;re in the city?

__RYAN:__   I&#39;m in Brooklyn.

__JASON:__   Brooklyn, oh

__RYAN:__   So there&#39;s a lot of example--

__JASON:__   All of Brooklyn is kind of, you know, just kidding.

__RYAN:__  But.  I mean there&#39;s a lot of case studies that I was even looking at, of pockets that would be interesting to look at like in eastern New York or Jamaica Queens versus a Williamsburg and Greenpoint would be an interesting comparison where there is… seems to be homeownership.  I don&#39;t know how long there&#39;s been homeownership there versus purely rental driven market and purely gentrified market.

__JASON:__  And New York is such an unusual… like, it&#39;s such a kind of a unique space there for housing.  You know, the rest of the country behaves a little bit differently, the way housing works, just because there isn&#39;t the density of people.  You don&#39;t have a constrained space.  **[00:12:00]** You don&#39;t have all--

New York&#39;s got a lot of stuff going on and that makes it a little bit different.  I&#39;d be cautious… I mean I don&#39;t know what your plan is here but I&#39;d been cautious… I&#39;ll describe, you know, looking at New York and expecting to see the same pattern as you see elsewhere.

__RYAN:__   Right.

__JASON:__   It&#39;s a unique space.

__RYAN:__  Yeah.  My approach at this point is to kind of think of it almost as its own case study.  And since I also want to focus on wealth, I figured it&#39;d be an interesting real estate market to look at with that lens because of the amount of wealth there is in real estate there; and to even more look where in New York as a microcosm did things develop in different ways -- looking at Queens versus Brooklyn versus Manhattan or Staten Island, kind of seen what the kind of barometers I want to look at are and then finding neighborhoods that are indicative of or counter -- that kind of perspective.

__JASON:__   That&#39;s interesting.

__RYAN:__  And then maybe just find people or find… you know, go to those places and kind of walk through and see what they look like and kind of see how the areas have developed differently.

__JASON:__   That would be interesting, yeah.

__RYAN:__  But when you talk about gentrification, so I know you… There was in the analysis you looked at gentrification, right?  I think there was metrics of appreciation over a certain degree over a certain period of time in terms of the median home value.  And I believe there was another metric as well, right?

__BRUCE:__  Yeah.  At that point, we had the governing.comdata available and we used that heavily for the gentrification portion.  Since that time, we developed around gentrification layers since we did that report.  And we generally utilized what they were saying whether the area had been gentrified.

__RYAN:__   Yeah.  Okay, interesting.

__JASON:__   We borrowed Lance Freeman&#39;s--

__BRUCE:__  Well that&#39;s Freeman, yeah.  That fermented the basic methodology for gentrification -- look at changes and be in household income, be in home value and also education-wise.

__RYAN:__  Yes, okay.  Interesting.  Another thing I wanted to kind of ask about is the paper you sent about… that was the new analysis on it… lending based on HOLC maps and saying  **[00:14:00]** there was actually a little more lending to black borrowers than was previously expected or there&#39;s evidence of that.

__BRUCE:__   Yeah.

__RYAN:__  So that kind of led me to thinking about how you make the causal connection between what happened based on this map or in the zone and showing whether or to what extent different levers of preventing access to homeownership happened in those areas, kind of making the connection of map to behavior and what that process is like.

__BRUCE:__  I&#39;m going to say this flat out.  There is no causal connection between with what the HOLC did and redlining.  Redlining existed prior towards the HOLC did.  The HOLC, when I say it&#39;s a Rosetta Stone…  All that HOLC did was… Well first off, they did all their loans between, what, 1934, 1936.

__BRUCE:__   &#39;37.

__JASON:__   Yeah, &#39;36-&#39;37.

__RYAN:__  And those were for primarily already owned homes and they needed to refinance it.

__BRUCE:__   Yes.

__JASON:__   Yeah.

__BRUCE:__  The HOLC program, it was to bail out underwater distressed homeowners who were going to lose their properties.

__RYAN:__   And the lenders who loaned to them.

__BRUCE:__   Right, the lenders. Yeah, right.

__JASON:__   Most of them have higher interest balloon loans.

__BRUCE:__   Yes.

__JASON:__  That were very common pre-1930s.  So HOLC brought in a 30-year fixed-rate product like they could lock-in the rate, they could keep people in the home.  And they did 15 million.

__BRUCE:__  They did a lot of loans.  They did a lot.  I&#39;m not sure how many off the top of my head.

__JASON:__  I want to say 15 million.  But yeah, erased from my memory there.

__BRUCE:__  Right.  The HOLC was fundamental to the modernization of the mortgage system in the United States. They did a pioneering product.  See, before that time… And you know more about this than I do -- the history of kind of the mortgage and how itdeveloped over the 20th century.

__JASON:__   Yeah.

__BRUCE:__  But it was most common basically before the 1930s to… basically, you either pay everything upfront or you would get a loan with one payment which we do after, say, three to five years.

__RYAN:__   The entire value of the--

__JASON:__   Or sellerfinanced, yeah.

__BRUCE:__   **[00:16:00]** Yeah.

__RYAN:__  Anything that was not already financed, the upfront payment and the loan payments were due at the end of three to five years.

__BRUCE:__   Exactly.

__RYAN:__   Okay.

__BRUCE:__   Exactly.  And that really impeded homeownership in this country, right?

__RYAN:__  Mm-hmm.

__BRUCE:__  So you know, 1932, 1933, that&#39;s the Depression.  You have all these people under water.  They had balloon payments coming up.  The HOLC provided this amortization process -- this ability to get a loan at 5% interest over an extended period of time which, you know, helped millions of people in this country.  And it helped both black, white and Hispanic people.

__RYAN:__  Were the terms of those loans pretty much consistent across different races of people that were asking for refinancing during that time?  Do you know about…?

__BRUCE:__   I think it was a standardized term.

__RYAN:__   Okay.

__BRUCE:__   You need to look at Andy Hillier&#39;swork on this.

__RYAN:__   Okay.

__BRUCE:__   But I believe it was pretty much standardized one that they provided.

__JASON:__  It came right, I mean, at a time where black ownership rates were 25 percent or something… like 30 percent or something like that.

__BRUCE:__   Yeah, that&#39;s true.

__RYAN:__   Yeah.

__JASON:__  And a lot of that, I&#39;m suspicious of, generally, you know, because you had sharecropper situations where the farmer was technically the owner.  And I don&#39;t know why… And keep in mind at that time, most of the black population have been concentrated in the black belt.  It would have been in that kind of situation, usually, I think.  I don&#39;t trust that figure that much.

I&#39;ve got some historical numbers here I kind of put together and something that we had looked at.  I just want to look at it for reference real quick Yeah, like white homeownership rates, I&#39;m pretty confident, and those are below 50 percent and they idled there for, you know, the whole period from about 1890 through about 1940 and that was during the period that we&#39;re talking about.

So they weren&#39;t going up at all.  It wasn&#39;t until after the war, you had kind of a confluence then of higher incomes and this stable product that anybody could qualify for, generally speaking.

__RYAN:__   Right.

__JASON:__  **[00:18:00]** I don&#39;t know how many people or how many black home borrowers were able to refinance loans.  I don&#39;t think very many would have had loans so I wouldn&#39;t put a lot of stake in that.

__RYAN:__  Yeah, because I remember the paper that I was reading was basically saying the lending was consistent with the homeownership rates that existed so that was the kind of benchmark for how much you expected.  And that&#39;s why I&#39;m also interested in learning about what avenues for new homeowners opened in this time, right, because that&#39;s a focus that I want to make in this project is I want to establish how important homeownership is in building wealth and generational wealth and what avenues were open or shut in the &#39;40s and what that means for the descendants of those families today.

__JASON:__   Yeah.  So you&#39;re familiar with Thomas Shapiro&#39;s work at Brandeis?

__RYAN:__   Yes.  I&#39;m actually talking with him tomorrow morning.

__JASON:__   Good.

__RYAN:__   If you have anything you think I should bring up with him, let me know.

__JASON:__  No.  He&#39;s the guy on racial wealth divide, especially the link to homeownership.  He&#39;s done the best work at linking wealth building… or you know, of building homeownership to racial wealth divide work.  I can&#39;t add anything to that.

We&#39;re going to connect him with Dedrick at some point in time.  I didn&#39;t realize your focus was soracial wealth divide focused… But Dedrick Asante-Muhammad has come on board here.  He was formerly at Prosperity Now and NAACP.  All of his work is racial wealth divide-related.

__RYAN:__   Okay.

__JASON:__  It&#39;s a shame you couldn&#39;t meet… You weren&#39;t here for the conference because there were a good stuff on this.  You know, some good speakers about this topic.  -- I can connect him with Dedrick after this just by email.

__RYAN:__   Sure.

__JASON:__  And you can talk to him and find out… You know to get his perspective on it.  But he&#39;s not going to be able to talk to you about, you know, statistics or the stuff that we&#39;re talking about now but he gives you a good perspective, I think, yeah.

__RYAN:__   Sure.

__JASON:__  **[00:20:00]** But post-war, so interestingly, at that time, they were just checking homeownership rates every 10 years with the census, right.

__RYAN:__   Yeah.

__JASON:__  But in 1945, there was a survey done on homeownership.  And what was interesting was, between 1940 where the homeownership rate was in the upper 40s through 1945, it went up -- just in that five-year period during the war.  Apparently, what was going on, was all the money that guys were making, they were sending home and families were using it to buy housing even during the war or while the war was on.

__RYAN:__   Yeah.

__JASON:__  And then after everybody came home, it just skyrocketed because you had kind of that perfect storm of a stable finance system, publicly-backed and you know income and… You know, it was kind of the heyday there, the &#39;50s, of rapidly increasing incomes.

__BRUCE:__  Post during the war, you have widely subsidized government construction of housing, taking the house.

__JASON:__   Yeah.

__BRUCE:__  That&#39;s something you really see industrial centers in Washington DC and these areas where they need workers.  They&#39;re building, you know, where **[unintelligible - 00:21:04]** today.

__RYAN:__   Yeah.

__JASON:__  Yeah.  But I mean there was also the period where red lined areas that were formerly mixed, you might have… you know, especially southern Europeans, Jews, Catholics or black, and some Latino… There wasn&#39;t a huge Latino population at that time.  But they were all on these red lined areas during the &#39;30s, right, along the &#39;50s.  Most of them headed for the hills even… you know, we&#39;re from Tampa area.

And the Cubans, when they came back from the war, they all bought houses in the suburbs and the Cuban neighborhoods all fell into decline.  And black families moved in.  Some were able to buy but many were renters in these communities.

When I was doing my thesis work, I mean, I spent a lot of time looking through court records and reading mortgages and deeds and things like that.  And these neighborhoods rarely saw any mortgage lending recorded that wasn&#39;t seller-backed for one thing.  **[00:22:00]** You don&#39;t understand what that is, but if I&#39;m going to sell you a house and you can&#39;t get a loan, I can give you the loan and you just basically pay me every month.  You had some of those contracts in place and you had a very small number of loans usually from credit unions instead that I think were probably related to an employer kind of… You know the person worked for.

__RYAN:__   Right.

__JASON:__  But there was really no, you know, rate or lending in most black neighborhoods that I looked at until the &#39;90s.  You really didn&#39;t just see a whole lot of it.

__RYAN:__   Right.  Okay.  Interesting.  Yeah, there&#39;s a lot kicking around in my--

__JASON:__   Yeah.  This is a big topic.

__RYAN:__  Yeah.  And I&#39;m also trying to think through, right now, how granular and how big I want to be in my geographic scope when I look at kind of like longitudinal homeownership in New York or kind of in a broader scale since the &#39;40s because I think it could be… It&#39;s a very compelling story to talk about, how there was this boom of homeownership that happened both… the kind of pre-boom during the war when money is sent back and people are buying houses and then that massive boom that happened afterwards which really positioned itself as a great wealth-building opportunity for some people who are able to participate in that market whether it be because of the income was high enough to buy it or because they were able to get a mortgage to participate.

__BRUCE:__  Yeah.  I think the lending part is important, and we&#39;re kind of partial with that.  So wealth is defined as, you know, what you could actually trade whatever the asset is for it, right, in dollar terms.  So with housing, if there&#39;s not demand for the housing you&#39;ve got, your actual wealth is pretty low

__RYAN:__   Yeah.

__BRUCE:__  So you had a rise about white and black homeownership especially post-war, from about 1945 through 1970-&#39;75, right?

__RYAN:__   Mm-hmm.

__BRUCE:__  And you see black homeownership rates will rise alongside whites but they&#39;re always at about 25 percent less.  **[00:24:00]** And that gap of 25 percent has been persistent for about 115 years at this point and it&#39;s actually widened a little bit the past few years.  It&#39;s to about 31 percent as of last year, I think.

__RYAN:__   Yeah.

__BRUCE:__  So that has persisted.  But more than that, where you see black people becoming homeowners were generally, in areas where nobody would lend money.  So it wasn&#39;t as if they could then turn around and sell those homes.  So they had very little… It was very difficult to build wealth in the home.  The value of your property is based on what somebody else will pay for it, right?

__RYAN:__   Right.

__BRUCE:__  Well if you&#39;re in a neighborhood that no banks will lend, what people will pay for it is going to be very, very low.

__RYAN:__   Yeah.

__BRUCE:__  You know, that creates the perfect condition for concentrating poverty in those areas, right.

__RYAN:__   Yeah.

__JASON:__  So if you&#39;re talking about wealth, the inability to get a loan on any of these areas, there&#39;s the unwillingness of banks to go into them at first because they legally red line them and say, &quot;We don&#39;t want to go in there.&quot;  Now, if you talk to banks, they&#39;ll use keywords like &quot;Older housing stock.&quot;  They&#39;ll complain about that.  They&#39;ll complain about, you know, &quot;lack of demand&quot; or something like that.

__RYAN:__   Yeah.

__BRUCE:__  But essentially, they&#39;re kind of substituting, you know in my mind, you know these other terms for &quot;Redlining,&quot; you know.  And there&#39;s just kind of this--

__JASON:__   Also &quot;Language of market forces.&quot;

__BRUCE:__   Yeah.

__RYAN:__   Yeah.

__BRUCE:__  It&#39;s a language of market forces.  And yes, market forces are working in these neighborhoods.  And what&#39;s backing this all up is the structural segregation.  It&#39;s existed, you know, really throughout history, right?  At first, that had certain legal things that prescribe that so you had zoning laws, you had restrictive covenants, you had homeowners associations which basically say that no one would but… you know, Caucasian could move into certain areas.

__RYAN:__   **[00:26:00]** Yeah.

__BRUCE:__  So you had that sort of structure that, you know, as a legal structure exists up to the Fair Housing Act, and then that went out with the Fair Housing Act.  But then you had other pressures at that point, when you have actual mob violence that would keep African-Americans from moving into white neighborhoods, you know, and in Levittown you have an instance in which was mob violence against people there.

__RYAN:__   Right.

__BRUCE:__  So the story repeated over and over and over again.  So then these constraints upon where African-Americans have lived within the urban structure of cities that have served as a depressant on their housing value and how much equity they can accumulate in their housing.

__RYAN:__  Yeah.  Sounds like the focus on… because I was trying to, in my head, map out what are the ways that these… kind of these forces materialized and one of them was keeping the market value low.  So even if you could buy a house, the value of that house stays low for the period of time you&#39;re there and it&#39;s sounds like that might be an area that I want to potentially focus on more from this conversation, that it seems like… Because even if the gap is consistent and homeownership rates go up, each home that you buy is not built to be the same value.

__JASON:__   Right, they&#39;re not the same.  Right, exactly, yeah.

__RYAN:__   Yeah.

__BRUCE:__   So there&#39;s a structure of segregation that just… It depresses value.

__JASON:__   Yeah.

__BRUCE:__  And it&#39;s an enduring during structure.

__JASON:__ And in economic terms, an economist would say that there&#39;s less demand in these areas because, you know, the people who are willing to buy there have less money to spend.  There are fewer people that are willing to buy there so it translates into lower demand.  And a free market person would say, &quot;Well than as it should be.  Those homes are worth less.&quot;

__RYAN:__   Right.

__JASON:__  The problem, of course, is that the social aspect of what that causes, then you have a distinct class of people who are forever unable to build wealth.  **[00:28:00]** Because when they can get into homeownership, the homes aren&#39;t really worth that much.

__RYAN:__   Right, exactly.

__JASON:__  Yeah.  -- I mean I got to get going.  -- One thing I usually think about though is that this isn&#39;t just… In the cities, there&#39;s a strong racial component to it.  But if you look nationally, people who live in one part of the country where homes are worth less, that means they build less wealth.  Well we all use the same dollar, right?

__RYAN:__   Right.

__JASON:__  We all use the same currency.  So if you own a house in Queens and you&#39;re low to moderate income and it&#39;s a thousand-square-foot town home or something like that and it&#39;s worth $500,000 and I got a ranch house in Little Rock and I&#39;ve got a half acre of land and I&#39;ve got 3000 square foot and it&#39;s a new house and it&#39;s worth $150,0000, well at the end of X amount of years, you&#39;re going to have a half million dollars, and I&#39;m not.

So, you know, there&#39;s a weird spatial aspect to it also where parts of the country are accumulating wealth very, very quickly and other parts of the country are not.  They&#39;re getting left behind.  And that&#39;s going to have the same effect as this racial gap where over time… And you know, you see parts of people who are homeowners in one part of the country becoming far more wealthy than counterparts in other parts of the country.  I think that&#39;s under-examined because it&#39;s harder to really look at, right?

__RYAN:__   Mm-hmm.

__JASON:__  It&#39;s more difficult to really… And conceptually, it&#39;s harder to explain its people.

__RYAN:__   Yeah.

__JASON:__  You know redlining, racism, segregation, you don&#39;t have to be a genius to, you know, draw the line between those things, right?

__RYAN:__   Mm-hmm.

__JASON:__   But the--

__BRUCE:__   Yeah, the geographic component to it.

__RYAN:__  Yeah.  And somewhere like New York could certainly be a good case study because you have areas, and I&#39;m sure there are houses that are going to be worth much more than, obviously, $500,000 now and places in New York where they are worth much less.  And if I can connect those current values to values in the &#39;40s, &#39;50s and with the zones that were maybe built to see kind of how that progressed or use it as an example case study, it could be interesting.

__JASON:__  **[00:30:00]** The good thing about New York City is the records.  You know, New York City tends to have its own… And if you don&#39;t know anybody, I can probably connect you with… I guess Jamie up there will be probably… New York City, especially like their tax offices that have their own, you know, record systems that are much… probably better than anything you&#39;re going to get from a federal level.

__RYAN:__   Yeah, cool.

__JASON:__  They&#39;re going to be limited just in New York City.  But if that&#39;s the area you&#39;re looking at, you can pull, you know, like--

__RYAN:__   That could be okay.

__JASON:__  I like that we were a part of… in Hillsborough County in Florida where the Property Appraiser&#39;s office had 60 years of records online I could pull.  Not every area has that.  New York probably will, where you can look at that house in the corner and say, &quot;Okay, this is what sold from the &#39;40s.  This is what it sold for in the &#39;60s and &#39;90s and 2000&quot; and kind, of you know, build out a map that we… the city and look at where home values have increased very quickly and where they haven&#39;t.

__RYAN:__   Yeah.

__JASON:__   That might be, you know, very interesting.

__RYAN:__  That would be very interesting.  I would love to learn about where that data source is and kind of start collecting that info.

__JASON:__  Yeah.  I can connect you with Jamie or Bruce if you want to do that after this and introduce him.  She&#39;s with ANHD which is New York city-based.  And anytime I need to know anything about New York City, I call her because she knows what she&#39;s talking about.  She&#39;s doesn&#39;t mess around.

__RYAN:__   Yeah, great.

__JASON:__  She has connected me, I think, a couple times with people at comptroller&#39;s office up there.  They&#39;ve got… I mean it&#39;s New York City.

__RYAN:__   Right.

__JASON:__  It&#39;s not like you&#39;re dealing with, you know, some little podunk town somewhere where it might have a part-time guy who does GIS sometimes.

__RYAN:__   Exactly.

__JASON:__  Yeah.  So that&#39;s an advantage to New York City, like using it for anything.

__BRUCE:__   It&#39;s a rich data source.

__RYAN:__   Yeah.

__JASON:__   Yeah.

__BRUCE:__ At the same time, it&#39;s kind of anomalous, too, where you&#39;re looking at New York City, it&#39;s a different kind of animal than the other…

__JASON:__  Yeah, completely.  Yeah, lower homeownership rates, typically, especially in some of the boroughs, yeah, much more multifamily.

__BRUCE:__   Right.  You got things like rent control that are in place there.

__JASON:__   Yeah.

__BRUCE:__  **[00:32:00]** You know, higher rates of rental, I would think.

__RYAN:__  Yeah, by design.

__JASON:__  Unlike the rest of the country, I think you got other… you know the incomes tend to be higher.  I think there are other methods of accumulating wealth there that may be pushed back a little bit on the dominance of homeownership.

__RYAN:__  Yeah.  All right.  This was super helpful.  Thank you so much for your time.

__JASON:__   No.  Stay as long as you need to.

__RYAN:__   Yeah, I will.  I appreciate it.

__JASON:__  No, I&#39;m just going to skate and… All right, guys, have a great one.

__RYAN:__   Yeah, you too.  Thank you.

__BRUCE:__  See you tomorrow.

__JASON:__  Yeah.

__BRUCE:__  So, when I say that, you know, &quot;What&#39;s the causal relationship with HOLC&quot; and lending and I say, there is none – let me qualify that.  [Laughter]

__RYAN:__   Yeah.

__BRUCE:__  Basically, the HOLChad done all their loans during the Residential Security Maps, okay? ** ** This mapping project they did… okay, the rationale, the theory behind it is, &quot;Okay, it&#39;s really driven a lot by Homer Hoyt&#39;s ideas.Okay, the Chicago School of Urban Sociology, where they&#39;re thinking a lot about how Chicago developed these ideas of filtration, these ideas… -- Have you heard of &quot;Filtration?&quot;

__RYAN:__   No.

__BRUCE:__  Basically, this idea that minorities, immigrant groups enter into an urban area, right, they generally start off in the worst housing stock, right?  And as they kind of climb as a group in their socioeconomic capacity and improve then they move a little bit further on the structure, getting a little bit better than move further out the structure, further out the structure.  It&#39;s this process of filtering over time that immigrant groups, you know… encounter so the Italians, the Irish, the Germans within the Chicago structure they&#39;ve seen as filtering through this and going from this… you know, kind of the bottom of the heap up to higher and higher socioeconomic status, right?

__RYAN:__  **[00:34:00]** Yeah.

__BRUCE:__  So it&#39;s one of the ideas that&#39;s driving this.  You know when you look at the reports and how the reports are done but the examiners are still on, it&#39;s a very structured detailed sort of thing.  But it&#39;s driven by these ideas from the Chicago School and Homer Hoyt.  He&#39;s the chief economist at FHA at that time.

__RYAN:__  Okay.

__BRUCE:__  So they&#39;re looking at, first, that housing structure.  You know, what&#39;s the condition of the house?  They&#39;re looking at amenities, transportation.  What is the situation of the neighborhood in terms of the structure?  You know where&#39;s it located?

__RYAN:__  Yeah.

__BRUCE:__  But then they&#39;re also looking at, okay, who lives there, you know.  What&#39;s the residential composition and what&#39;s their socioeconomic status?  You know, are they businessmen?  Are they white collar?  Are they blue collar? Are there laborers?

__RYAN:__   Yeah.

__BRUCE:__   And then they&#39;re looking at race, ethnicity and national origin.

__RYAN:__   Right.

__BRUCE:__  Right.  And so you see pretty much uniformly areas that had… they qualify as &quot;Negro infiltration&quot; and the reports the examiners do.

__RYAN:__  Yeah, I was looking at a lot of the area descriptions of the text and I saw that phrase happen a lot.

__BRUCE:__   That&#39;s pretty much synonymous with the area coded red.

__RYAN:__   Yeah.

__BRUCE:__  They become hazards.  That&#39;s considered to be, you know, a consistent indicator at what hazardous areas are.  I mean there are other things, too.  It can be &quot;Asian infiltration.&quot;  There could be--

__RYAN:__   Saw mixed races is something that&#39;s in there a lot.

__BRUCE:__  Exactly, even Russians or Eastern Europeans.  Someone said &quot;Finns,&quot; you know, living in the area and is downgraded.

__RYAN:__   Exactly.

__BRUCE:__  So these are the sorts of things of logic that&#39;s, at the time.  And what they&#39;re trying to assess is, &quot;What&#39;s the risk of lending in these areas&quot; or more so, &quot;What&#39;s the risk in holding our holdings in these areas?&quot;  Because they&#39;ve already made all their loans, you know, when they&#39;re doing this assessment.  **[00:36:00]** The money is gone.  Now they&#39;re trying to assess, &quot;Well what&#39;s the risk level that we&#39;re holding with these?&quot;  And you know, if something goes foreclosure, right, what are we going to do with that property?  How are we going to allow that property to be resold or auctioned or whatever?

__RYAN:__   Yeah.

__BRUCE:__  So that&#39;s the logic that they&#39;re looking at.  So it doesn&#39;t have any impact upon their lending decision.  The examiners, what they&#39;re doing is they&#39;re going there talking to real estate professionals.  They&#39;re talking to bankers.  They&#39;re talking to the County Appraiser&#39;s Office.  And they&#39;re finding out, you know, what&#39;s the local perception of these neighborhoods, you know?  Are these considered good risk or bad risk?  So that&#39;s what&#39;s sets the Rosetta Stone.  They&#39;re recording what the local, you know, ideas were about the lending risk in that neighborhood at that time.

__RYAN:__  And those local ideas are going to affect things like who&#39;s going to be able to get a mortgage or what&#39;s going to happen to the home value.  But it&#39;s not like they looked at these maps and said, &quot;This is a red zone therefore I act in this way.&quot;

__BRUCE:__  Absolutely.  Now later on the FHA, right…and we don&#39;t know whether FHA had access to HOLC maps or not. ** **

__RYAN:__   Right.

__BRUCE:__  You know it&#39;s kind of unknown.  Hillier hasn&#39;t been able to state positively &quot;Yes&quot; or &quot;No.&quot;  The other paper I sent you had a more detailed kind of discussion of that.

__RYAN:__   Mm-hmm.

__BRUCE:__  But basically, the FHA replicates, you know, the maps.  You know, whether or not they had access to them.

__RYAN:__  They&#39;re operating on similar information whether or not it&#39;s in that structure or whether or not it&#39;s that map.

__BRUCE:__  Exactly, yes.  They&#39;re operating off of similar information, the same kind of local knowledge of what the market is in those areas.  And there, the maps do become, you know, something where… Their reference point.

__RYAN:__  Yeah.  Actually, I learned that the HOLC, their primary method was kind of like emergency restructuring or refinancing before these maps were drawn.

__BRUCE:__   Right.

__RYAN:__  The FHA, their primary mode of operation, was it offering new loans?

__BRUCE:__   Exactly.

__RYAN:__   It&#39;s offering new mortgages, right…

__BRUCE:__   **[00:38:00]** That&#39;s right.

__RYAN:__  …in the same kind of 30-year fixed amortization structure which was a new structure at that time.

__BRUCE:__   Yeah.

__RYAN:__  So I assumed that means a majority of home purchases and mortgage acquisitions or mortgage like acquiring… a mortgage happened through the FHA or at least through the structure that they--

__BRUCE:__  Sure, because they have a much longer kind of historical timeframe, it&#39;s still around today.

__RYAN:__   Right.

__BRUCE:__  Yeah, the HOLC, I think they&#39;ve pretty much closed up shop by the early 1960s.

__RYAN:__  Yeah, and they weren&#39;t offering new loans there.  Basically, they were just managing the loans they already--

__BRUCE:__  They weren&#39;t offering new loans.  They were just managingwhat they already had.

__RYAN:__   Yeah.

__BRUCE:__   Yeah.

__RYAN:__  Okay, interesting.  And so in these zones where… they are drawn red because it&#39;s reflecting the kind of attitudes of that zone at that time.

__BRUCE:__   Yeah.

__RYAN:__  What would you say are the biggest ways that those attitudes kind of… were reflected in borrowing or lending policy in that zone?  Is it mostly like we talked about this kind of home value within that zone?  Would you say that&#39;s one of the big areas or house kind of did that manifest?

__BRUCE:__  I mean if you can&#39;t get a loan in an area or if your loan is going to be higher cost, right…  And that was the best-case scenario in the redline areas, was the loan… If you could get a loan, it would be a higher cost one, right?

__RYAN:__   Right.

__BRUCE:__  So if you can&#39;t get a loan or it&#39;s a higher cost loan, that&#39;s going to depress the value of that property.  So it&#39;s always going to be kind of a depressant on the value.

__RYAN:__   Yeah.

__BRUCE:__  The other thing is… A couple of books I&#39;m going to suggest that you take a look at.  One is Mehrsa Baradaran&#39;s new book, &quot;The Color Money.&quot;  It&#39;s about the black banking system.  And she talks about this entire kind of negative feedback loop of black banks and ownership within the ghetto, which refers to, purposely, as a ghetto because a ghetto is a place where people are basically forced to live.  They&#39;re confined to live in a ghetto, okay?  And that&#39;s what these places were in many cases.  Many redlined areas were in essence ghettos.  **[00:40:00]** You were forced to live in that area, you could not move outside of it.  There were constraints to moving outside of it.

__RYAN:__   And those constraints, I know that they were legally codified constraints.

__BRUCE:__   Yeah.

__RYAN:__  So does that mean that in, I guess, land use in certain communities, they would say, is legal to prevent someone from… to not offer someone a mortgage on the basis of race?  Is that kind of how that manifested?  How legally did that manifest?

__BRUCE:__  Okay, so you have restrictive covenants, right?

__RYAN:__   Yeah.

__BRUCE:__  Restrictive covenants, that&#39;s basically where you&#39;re becoming a member of a homeowners association… you know former homeowners association and… In order to move in that community, you have to join that homeowners association and conform with those restrictive covenants.  And in a lot of cases… well, pretty much all cases, African-Americans were prohibited.  And a lot of cases, Jews were prohibited from moving into these areas.  Anybody who was Semitic was prohibited from these areas.  So it was pretty much confined to Caucasians pretty much in these areas.

__RYAN:__   Yeah.

__BRUCE:__  So that&#39;s one aspect -- restrictive covenants.  And then also in the contracts that people would… for sale, they would have written right in the contract that you cannot resell this house to anyone who is not Caucasian.  Those were really common in Maryland.  You see a lot of those in Maryland.

__RYAN:__   Mm-hmm, okay.

__BRUCE:__   So homeowners associations, restrictive covenants.

__RYAN:__  So restrictive covenants and the concept of the redline really do go hand-in-hand, right?

__BRUCE:__   They really do hand-in-hand.

__RYAN:__  If you&#39;re in a red lined area, you&#39;re prevented from moving out of that area because of restrictive covenants.

__BRUCE:__   Exactly.

__RYAN:__  That makes that a red line area, essentially, the ghetto that you cannot leave…

__BRUCE:__   Exactly.

__RYAN:__  … where values are depressed because loans aren&#39;t being offered or being offered at such high rates.

__BRUCE:__   Yeah.

__RYAN:__  Those rates, I know there was the concept of predatory loans where the rate would go up after a certain number of years and wasn&#39;t that fixed amortization.  That was happening at this time as well, right?  Those are being introduced.  Or is that fixed rate just higher?

__BRUCE:__   I don&#39;t know.

__RYAN:__   Okay.

__BRUCE:__   My guess is the fixed rate was just higher but I&#39;m not sure.

__RYAN:__  Okay.  That&#39;s something I can definitely look into it a little bit more.  Okay, interesting.  **[00:42:00]** But that being said, the maps are still of a Rosetta Stone to look at that, right?

__BRUCE:__   Exactly.

__RYAN:__  Like, they&#39;d be a good guide for me to say, &quot;Here are the A-B rated zones versus C-D rated zones&quot; and kind of find case studies or look at those zones like your organizations has done, right?  In aggregate to say, &quot;What does that look like in this area?&quot;

__BRUCE:__   That&#39;s right, yeah.

__RYAN:__   Okay.  Interesting.  This is all really good food for thought as well.

__BRUCE:__   Good.

__RYAN:__  Yeah, I&#39;m really interested to talk to Prof. Shapiro tomorrow to get that connection of how homeownership builds wealth and then kind of use this perspective to say, &quot;What am I going to look at in terms of the lending behavior and who had access to what and what the values were and how that kind of built wealth for certain communities or not by their ability to gain a loan in a place with a reasonable rate for a house that was going to be appreciating in value since they bought it.

__BRUCE:__  Yeah.  Now I mentioned Baradaran and this kind of negative feedback of black wealth.  So she talks about this issue where, first off, blacks were pretty much restricted to buying housing within the ghetto, right?

__RYAN:__   Yeah.

__BRUCE:__  So it depresses the value right there. If blacks then moved out of the ghetto, okay, and moved into another area that was a white area, first off, they face violence oftentimes.  But then if they were successful in doing that, you have this mechanism, right, where the first, I guess, pioneering black families that would move into an area, they would pay a premium to move into those houses, right?  They would have to pay premium.

**[00:44:00]** Then the more black residents that moved into that area, it would set off the tipping point mechanism, that once you&#39;ve reached a certain point of… And I&#39;m going to use the old word &quot;Infiltration.&quot;  Once you have a certain number of black population, it would tip and the neighborhood value would then go down.  So what happens to the first families that bought in there?  They&#39;re paying the absolute top dollar for their property…

__RYAN:__   For an assets that&#39;s now crashing.

__BRUCE:__   …and for the assets that&#39;s now crashing in value.

__RYAN:__   Yeah.

__BRUCE:__  And this is what happens with blockbusting in the 1950s in places like Baltimore, Maryland where you have widespread blockbusting going on; where this is a real estate technique where basically a realtor would introduce a Negro family into a Baltimore neighborhood and at top dollar, introduce more African-Americans in and then the value… The neighborhood would tip.  It would crash.  But they would do this over and over and over again as a profit-making mechanism.  So that&#39;s the phenomenon of blockbusting and it happened very rapidly within about a five-year time period within Baltimore and the row houses -- the areas within Baltimore.

__RYAN:__   Okay.

__BRUCE:__  So those areas, you know, black families that lived in those areas.  Particularly the early ones, they lost their value.

__RYAN:__  Right.  And the timeline of this, when this became more prevalent, is this…?

__BRUCE:__  So blockbusting, you&#39;re seeing that occur in Baltimore in the &#39;mid-&#39;50s when that&#39;s happening.

__RYAN:__  Okay.  So it&#39;s another tactic during the housing boom to make sure that the values for white houses are kind of retained and--

__BRUCE:__   Because of what you have going on in that time? Suburbanization.

__RYAN:__   Yeah.

__BRUCE:__  Right?  The highway system belt, you have white families.  They&#39;ve accumulated sufficient wealth now.  They want to get out of the city.  They&#39;re moving into the suburban areas.  They have blockbusting going on simultaneously with it.

__RYAN:__   Mm-hmm, okay.

__BRUCE:__ That&#39;s a major reorganization of the US urban system that takes place during that time period.

__RYAN:__  Okay.  Yeah, that makes sense.  **[00:46:00]** Cool.  I&#39;m trying to think through to make sure I have the main kind of points that I wanted to hit on in the goals of this, and I think you covered most of it, not all of them. What would you say, as someone who&#39;s like the expert in this space, who&#39;s done a ton of research on this topic, what kind of narrative or statistics or both would you find more the most compelling in the argument of lending behavior or borrowing access especially during this New Deal era and right afterwards, during this boom, and current… either homeownership, home value, or wealth today?  What perspective or what statistics would you find the most compelling to tell that story?

__BRUCE:__  Well I mean there&#39;s a homeownership gap that&#39;s very compelling.  There&#39;s this consistent homeownership gap between whites, African-Americans, Hispanics and how that&#39;s just persisted over time.

__RYAN:__   So the persistence of that gap, is this a telling thing?

__BRUCE:__   Yes.

__RYAN:__  Okay.  Because I was almost thinking that a successful storywould be showing a widening of that gap in this time, right?  You get more access to homes for people of certain communities and races.

__BRUCE:__   The gap started to close during the 2000s, right…

__RYAN:__   Yeah.

__BRUCE:__   … when you had the housing bubble.

__RYAN:__   Subprime lending.

__BRUCE:__  And subprime lending and housing bubble going on, right?  So the gap started to close during that time period.  Then the crash occurs and you see this enormous loss of wealth held and…

__RYAN:__   Concentrated in black areas.

__BRUCE:__  …that&#39;s concentrated in black neighborhoods, yes.  And then the homeownership gap expands again…

__RYAN:__   Yeah.

__BRUCE:__   …by several points.

__RYAN:__  And I think that, showing that could be a nice foil, too, and say even when the gap closes, you see these other lending behaviors that prevent accumulation of wealth in people get these subprime mortgages.

__BRUCE:__  Yeah.  When we talk about the racial wealth gap,  I mean housing is just one component of it.

__RYAN:__   Right.

__BRUCE:__   It&#39;s housing.  It&#39;s education.  It&#39;s wages.

__RYAN:__   Of course.

__BRUCE:__  **[00:48:00]** These are all components of the racial wealth gap that I would say or… I don&#39;t know if they&#39;re equally important or not but they are all very important aspects.

__RYAN:__   They&#39;re all factors, right.

__BRUCE:__   Very important aspects, yes.

__RYAN:__  And I mean that&#39;s going to be part of the… my kind of lead-in in my conversation of it and for the sense of scope creep, but for me being just myself writing my thesis, that&#39;s why I&#39;m kind of honing in the homeownership pieceof it.

__BRUCE:__   Sure.

__RYAN:__  So what about the sense of like median value of homes in these areas like we talked about?  Is that also something you think would be a useful comparison to make in addition to like the homeownership gap itself and this percent of homeownership.

__BRUCE:__   Sure, oh yeah.  Yeah, look at median home values, yeah.

__RYAN:__   Great.

__BRUCE:__  Right now, we&#39;re working on a report.  We&#39;re looking at small business lending and we&#39;re looking at mortgage lending within the neighborhoods that were low graded versus high graded versus the ones that were ungraded, right, because the wide areas within cities now… that weren&#39;t graded in the HOLC gaps and we&#39;re finding that, actually, there&#39;s the widest gap between the ones that were ungraded and the graded ones, okay?

__RYAN:__   So you&#39;re saying that the ones that were ungraded had lower value?

__BRUCE:__   Higher.

__RYAN:__   Higher?

__BRUCE:__  Higher -- they get more loans.  The ones that were ungraded get more loans.  And if you think about that, okay, these are the areas, well, one, it might have been industrial, okay?

__RYAN:__   Sure.

__BRUCE:__  These are potentially areas that have gentrified in many cities with the industrialization in many cases like Baltimore.  You know, you look at Inner Harbor Baltimore down there, that entire harbor, that was ungraded HOLC maps, right?

__RYAN:__   Right.  Because it wasn&#39;t a residential.

__BRUCE:__  Because it wasn&#39;t residential at that time.  It was running wharfs at that time.

__RYAN:__   Exactly.

__BRUCE:__  So you&#39;ve got that phenomenon going on where gentrification taking place in areas that were formerly industrial.  Then the other thing is these other areas that were ungraded were undeveloped so you&#39;ve had development occur there, suburbanization occurred there.

__RYAN:__   Right.

__BRUCE:__  So the housing stock there is new in general.

__RYAN:__   Yeah, that makes sense.

__BRUCE:__  **[00:50:00]** On small business lending, what we&#39;re finding is that there&#39;s this gap between ungraded but it also impacts the best graded areas, too; that they&#39;re low in terms of small business investment.  And why would that be?  Because of zoning, right?  They will not have as many commercial, as many business locations within these prime residential areas therefore, it makes sense that the small business lending would be less.

__RYAN:__  Right.  Where are those zones to be… to kind of be concentrated in a more packed-in areas.  Are those like the… were they the lower-graded zones or is it… At that point, it&#39;s just not the highest grade for the small business loans?  Are those kind of distributed across areas of…?

__BRUCE:__   So we&#39;re actually saying more small business loans in a low-graded areas.

__RYAN:__   Okay.

__BRUCE:__   Right?

__RYAN:__   And kind of turn those into more commercial centers?

__BRUCE:__   The lowest is the high-graded areas, right?

__RYAN:__   Yeah.

__BRUCE:__  Then the low-graded areas are about that and then the ones that were ungraded have the most lending.  For small business lending in general.

__RYAN:__   Okay… yeah.

__BRUCE:__  I haven&#39;t looked at this in a city-by-city basis.  We need to look at it because I expect there&#39;s going to be a lot of, you know, differences from different urban areas but in general or national patterns that we&#39;re seeing.

__RYAN:__  Right.  And that makes sense to me.  I mean, especially… I was not sure what I expected or what I thought about with the ungraded zones having more mortgages or higher-rated properties does make sense because there are going to be newer developments there.

__BRUCE:__  And the low-grade areas having more because they&#39;re going to have, first off, less zoning structures once put in there.  So there&#39;s going to be more businesses, more commercial activity close to.

__RYAN:__  Exactly.  And then you get to the issue of displacement and what that means when they go in there and weren&#39;t able to buy or capitalize on selling properties at that point.  Cool.  Great.

**[00:52:00]** I think the biggest thing that I want to follow up on, too, is this concept of… both the data source and a story behind specific houses that were sold that we were talking about, that kind of data source and, say, where the tax record is showing of a specific house or houses in an area that were sold in the &#39;40s and the &#39;60s and behind these and kind of following the threads to tell stories of two potentially areas that went on different tracks and just to kind of ground that in a real house or a real family or real area and say, not obviously talk about like who the individual people are, but just to say, &quot;Imagine you&#39;re on this block and you see this house get sold five times versus that house sold five times.&quot;

__BRUCE:__   Right.

__RYAN:__  What happens in that… where one accumulates by such a high degree and the other is stagnant at best.

__BRUCE:__  Right.  So, eventually, the choice like a gentrifying area in Brooklyn.

__RYAN:__   Yeah.

__BRUCE:__  You know, and see… and trace maybe it was red lined at one point and to see what happened, too, I guess, is, you know, gentrified.

__RYAN:__   Exactly.

__BRUCE:__  Or go to an area in Bronx that has not… or that may have been higher graded back then and is now… you know, it has not gentrified, has not maintained its value.

__RYAN:__  Definitely.  Cool.  I think that&#39;s most of the big concepts I have.  This has been really helpful to help conceptualize kind of like how do you think about showing, over time, both understanding how those maps and the kind of perspective of HOLC and FHA were at the time; how those manifested in who was able to get a loan and where and which kind of loan and what happens to them once they have that loan.

__BRUCE:__   Right.

__RYAN:__  And once they had that house -- what that means for their wealth accumulation.

__BRUCE:__   Yeah.

__RYAN:__  And then thinking about longitudinally, it&#39;s going to be an interesting thing for me to still figure out how granular do I want to go in terms of my data collection.  Census tract levels in the &#39;40s is what I&#39;m looking at right now and that&#39;s more of a headache than I think may be worth it so we&#39;ll have to see what story I want end up telling is at that point.

__BRUCE:__  Dealing with census tracts is really a headache because they change or can change every 10 years.

__RYAN:__   Yeah.

__BRUCE:__  Right?  So even the dataset from 2010 and 2000, you got to normalize it.

__RYAN:__   Exactly.

__BRUCE:__  You can use something like the LTTB -- &quot;Longitudinal Tract Data Base&quot; -- from Brown University.  That&#39;ll take you back to like 1970, right, and give you a normalization from 1970.  -- Oh gosh, who&#39;s the other one who does this?  It&#39;s a commercially available product through Geolytics that&#39;s actually the best but it&#39;s expensive.  You might have access to it though as a student.

__RYAN:__   Yeah.

__BRUCE:__  Yeah, the Geolytics is really nice to work with.  That goes back to 1972.  It has normalized tract boundaries through 2010.

__RYAN:__  I also thought about this earlier when we were talking about it.  This and talking about census tracts just kind of brought it back up.  We talked about the HOLC zones and how they like… you know, were appraising all these different things.  How did they determine which lines would constitute one zone versus another zone?  Do you know if those were census tracts at that time or they just drew the zone… their own lines?

__BRUCE:__   I don&#39;t know.

__RYAN:__  Because it almost looks… Some of them almost look gerrymandered in kind of how skinny… there are areas that are next totwo other gradings.

__BRUCE:__  Yeah.  I don&#39;t know how they define neighborhoods.  So that&#39;s an interesting question.  I don&#39;t know how they did that.

__RYAN:__   Okay.  Cool.

__BRUCE:__  Yeah, I don&#39;t know.  I was looking at Oakland the other day and they have the Bushrod area that&#39;s next to Bushrod Park.  And I was wondering &quot;Well how do they, you know, draw these red areas?&quot;  It&#39;s a redlittle square of about, I don&#39;t know, six blocks or something like that.  And it&#39;s like...  I don&#39;t know.

__RYAN:__  There was one area I saw when I was looking at the New York maps in like Central Bronx where there was a yellow zone that had kind of like… almost a very long tail.  It was like one square and the long tail going south that was super skinny and on both sides were B-rated zones.

__BRUCE:__   Yeah.

__RYAN:__  So I had no idea if there was just like… and when doing their appraisals, they saw certain things only within that tract.  Maybe there was one strip of a street that had certain people living on it where they were like… it made sense to draw this border.  Because based on the characters we talked about, they saw on that main drag and not on other streets, potentially.

__BRUCE:__  Yeah.  And it could also be a geographic feature or there or something… I mean it could be that it goes down a river.  I mean, oftentimes, areas close to rivers were downgraded because they were industrial sites, generally.  The rivers were used to site factories and things like that.  So you often find areas along rivers, you know, as being redlined because of that -- industrial uses.

__RYAN:__   **[00:56:00]** Right.  Cool.  Awesome.  Yeah, it makes sense.

__BRUCE:__   And today, that might be amenity-type, you know, location.

__RYAN:__   Yeah, river views.

__BRUCE:__   Yeah, once the factory is gone, it becomes…

__RYAN:__  Right.  And you don&#39;t need to have as many in touch with factories right next to where you need to ship things.

__BRUCE:__   Right.

__RYAN:__   Yeah.  Great.

__BRUCE:__  If you want to, I&#39;ll show you with a report, basically, the section where we did the rasterization.

__RYAN:__   Yeah, that will be interesting.

__BRUCE:__   And show you how that was done.

__RYAN:__  That will be interesting to see.  I don&#39;t know if I… -- I&#39;m going to shut off the recording...  -- I don&#39;t know if I&#39;ll need to do that to the same extent…
