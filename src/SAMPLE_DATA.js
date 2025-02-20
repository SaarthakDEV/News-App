const getData = (category) => {
    switch(category){
        case "general": return {
            "status": "ok",
            "totalResults": 37,
            "articles": [
                {
                    "source": {
                        "id": "associated-press",
                        "name": "Associated Press"
                    },
                    "author": "MEG KINNARD",
                    "title": "A comprehensive look at DOGE’s firings and layoffs so far - The Associated Press",
                    "description": "Thousands of federal government employees have been shown the door in the first month of President Donald Trump’s administration. There’s no official figure available of the total firings or layoffs, but The Associated Press has tallied how agencies across th…",
                    "url": "https://apnews.com/article/doge-firings-layoffs-federal-government-workers-musk-d33cdd7872d64d2bdd8fe70c28652654",
                    "urlToImage": "https://dims.apnews.com/dims4/default/cc4c334/2147483647/strip/true/crop/5716x3215+0+300/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fb4%2F7c%2Fc74b16d9797ab2de49c83372a787%2Fa4c8677ab9994303bd8b315883e0f752",
                    "publishedAt": "2025-02-19T14:05:00Z",
                    "content": "WASHINGTON (AP) Thousands of federal government employees have been shown the door in the first month of President Donald Trumps administration as the White House and its Department of Government Eff… [+9124 chars]"
                },
                {
                    "source": {
                        "id": "the-wall-street-journal",
                        "name": "The Wall Street Journal"
                    },
                    "author": "The Wall Street Journal",
                    "title": "The Redheaded Bibas Children, the Youngest Hostages in Gaza, Aren’t Coming Home Alive - The Wall Street Journal",
                    "description": null,
                    "url": "https://www.wsj.com/world/middle-east/the-redheaded-bibas-children-the-youngest-hostagesin-gaza-arent-coming-home-alive-685f127d",
                    "urlToImage": null,
                    "publishedAt": "2025-02-19T13:33:00Z",
                    "content": null
                },
                {
                    "source": {
                        "id": "wired",
                        "name": "Wired"
                    },
                    "author": "Chris Haslam",
                    "title": "Your Earbuds Are Gross. Here’s How to Clean Them Properly - WIRED",
                    "description": "Filthy buds look bad, impact sound quality and even risk infection. WIRED asked the experts how to correctly banish that ear gunk.",
                    "url": "https://www.wired.com/story/your-earbuds-are-gross-heres-how-to-clean-them-properly/",
                    "urlToImage": "https://media.wired.com/photos/67b4ea32e3e0b9831f2dbce5/191:100/w_1280,c_limit/airpod-cleaning-gear.jpg",
                    "publishedAt": "2025-02-19T13:00:00Z",
                    "content": "Have you looked closely at your earbuds lately? I did, and I was horrified at how gross they were. My trusty Apple AirPods had become so mucky and caked in ear wax I was genuinely embarrassed, and al… [+3558 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "CNBC"
                    },
                    "author": "Michael Wayland",
                    "title": "Embattled EV maker Nikola files for Chapter 11 bankruptcy protection - CNBC",
                    "description": "Nikola – a once popular auto startup of investors – filed for bankruptcy protection after failing to secure a buyer or raise additional funds.",
                    "url": "https://www.cnbc.com/2025/02/19/nikola-chapter-11-bankruptcy-protection.html",
                    "urlToImage": "https://image.cnbcfm.com/api/v1/image/107198857-16771638812023-02-23t142204z_654493182_rc21hz92tkr5_rtrmadp_0_nikola-results.jpeg?v=1737669640&w=1920&h=1080",
                    "publishedAt": "2025-02-19T12:41:20Z",
                    "content": "DETROIT Nikola Corp. an auto startup that was once a favorite of Wall Street analysts and retail investors filed for bankruptcy protection after failing to secure a buyer or raise additional funds to… [+3237 chars]"
                },
                {
                    "source": {
                        "id": "cnn",
                        "name": "CNN"
                    },
                    "author": "Ashley Strickland",
                    "title": "Webb telescope spies the Milky Way’s black hole constantly ‘bubbling’ with light - CNN",
                    "description": "The James Webb Space Telescope has shown that the Milky Way’s black hole is constantly blazing with light, releasing long flares as well as short flashes every day.",
                    "url": "https://www.cnn.com/2025/02/19/science/milky-way-black-hole-flickers-webb/index.html",
                    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/stsci-01jkre5xe0dh3pj39cg89qf7z6.jpg?c=16x9&q=w_800,c_fill",
                    "publishedAt": "2025-02-19T12:31:00Z",
                    "content": "Sign up for CNNs Wonder Theory science newsletter. Explore the universe with news on fascinating discoveries, scientific advancements and more.\r\nAstronomers using the James Webb Space Telescope have … [+7949 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Formula 1"
                    },
                    "author": "F1",
                    "title": "IN PHOTOS: Every 2025 F1 car livery after their spectacular F1 75 Live unveilings - Formula 1",
                    "description": "Check out all 10 liveries following their grand reveal at F1 75 Live...",
                    "url": "https://www.formula1.com/en/latest/article/in-photos-every-2025-f1-car-livery-after-their-spectacular-f1-75-live.2BZTh37ifdxAASqub3X1HK",
                    "urlToImage": "https://media.formula1.com/image/upload/t_16by9South/f_auto/q_auto/v1739961588/fom-website/2025/F1%2075%20Live/GettyImages-2200471441.jpg",
                    "publishedAt": "2025-02-19T12:01:54Z",
                    "content": "What a night the F1 75 Live season launch proved to be, as the 75th anniversary year of Formula 1 kicked off in style.\r\nFrom entertainment galore, to seeing all 20 drivers lining up in their 2025 col… [+540 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Tom's Guide"
                    },
                    "author": "Jason England",
                    "title": "Where to buy RTX 5070, RTX 5080 and RTX 5090 — live updates and stock checker - Tom's Guide",
                    "description": "Here's where to get Nvidia's most powerful GPUs yet!",
                    "url": "https://www.tomsguide.com/news/live/where-to-buy-rtx-5070-rtx-5080-rtx-5090",
                    "urlToImage": "https://cdn.mos.cms.futurecdn.net/ax65iX32yh47dRY2KsUyKA-1200-80.jpg",
                    "publishedAt": "2025-02-19T11:58:51Z",
                    "content": "2025-02-19T15:08:12.276ZThe RTX 5070 Ti reviews are in — opinions are mixed\r\nThe embargo has lifted and the reviewer impressions fall largely in line with what we saw with our RTX 5090 testing and RT… [+7618 chars]"
                },
                {
                    "source": {
                        "id": "cnn",
                        "name": "CNN"
                    },
                    "author": "Lisa Respers France",
                    "title": "Rihanna reacts to A$AP Rocky not guilty verdict - CNN",
                    "description": "The world watched as A$AP Rocky flung himself into his partner Rihanna’s arms after he was acquitted Tuesday and now she has shared her joy.",
                    "url": "https://www.cnn.com/2025/02/19/entertainment/rihanna-asap-rocky-verdict-reaction/index.html",
                    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/2025-02-19t013353z-970232582-rc2dxcag9eqq-rtrmadp-3-people-asap-rocky-court.JPG?c=16x9&q=w_800,c_fill",
                    "publishedAt": "2025-02-19T11:51:00Z",
                    "content": "The world watched as A$AP Rocky flung himself into his partner Rihannas arms after he was acquitted Tuesday and now she has shared her joy.\r\nThe superstar singer and mogul posted about her feelings o… [+1690 chars]"
                }
            ]
        }
        case "sports": return {
            "status": "ok",
            "totalResults": 68,
            "articles": [
                {
                    "source": {
                        "id": null,
                        "name": "Racingnews365.com"
                    },
                    "author": null,
                    "title": "Ferrari reveal radical F1 changes for first Hamilton car - Racingnews365.com",
                    "description": "RacingNews365's technical analyst Paolo Filisetti casts an eye over a radical 2025 Ferrari.",
                    "url": "https://racingnews365.com/ferrari-reveal-radical-f1-changes-for-first-hamilton-car",
                    "urlToImage": "https://cdn.racingnews365.com/2025/Tech/_1800x945_crop_center-center_75_none/sf25-floor-prev-right.jpg?v=1739972009",
                    "publishedAt": "2025-02-19T12:52:00Z",
                    "content": "The first images of the SF-25 were released immediately after the successful F1 75 Live event in London, and in no uncertain terms, it is the machine Ferrari is for two world championship titles in t… [+2097 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "New York Post"
                    },
                    "author": "Richard Pollina",
                    "title": "Chilean migrants charged in $2 million burglary spree targeting Patrick Mahomes, Travis Kelce, star athletes - New York Post ",
                    "description": "If found guilty, the men could each face a maximum penalty of 10 years in federal prison.",
                    "url": "https://nypost.com/2025/02/19/sports/chilean-migrants-charged-in-burglaries-of-patrick-mahomes-travis-kelce-joe-burrow-homes/",
                    "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2025/02/ignacio-zuniga-cartes-20-chile-98801868.jpg?quality=75&strip=all&w=1024",
                    "publishedAt": "2025-02-19T12:46:00Z",
                    "content": "A gang of Chilean nationals has been charged with a string of robberies that stole millions in valuables from high-profile athletes across the U.S. — including the homes of Kansas City Chiefs stars P… [+3947 chars]"
                },
                {
                    "source": {
                        "id": "espn",
                        "name": "ESPN"
                    },
                    "author": "Jay Bilas",
                    "title": "The only 68 teams to know, according to Jay Bilas - ESPN",
                    "description": "With 25 days until Selection Sunday, Bilas breaks down the field -- and, yes, the SEC leads the way.",
                    "url": "https://www.espn.com/mens-college-basketball/insider/story/_/id/43905236/the-bilas-index-vol-ii-top-68-teams-mens-college-basketball-2024-25",
                    "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0104%2Fncb_bilas%2Dindex_16x9.jpg",
                    "publishedAt": "2025-02-19T12:45:00Z",
                    "content": "This has been a spectacular men's college basketball season. Generally, the players are better and more skilled than ever, and the schemes coaches are running are very creative and interesting. Overa… [+4576 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Formula 1"
                    },
                    "author": "F1",
                    "title": "IN PHOTOS: Every 2025 F1 car livery after their spectacular F1 75 Live unveilings - Formula 1",
                    "description": "Check out all 10 liveries following their grand reveal at F1 75 Live...",
                    "url": "https://www.formula1.com/en/latest/article/in-photos-every-2025-f1-car-livery-after-their-spectacular-f1-75-live.2BZTh37ifdxAASqub3X1HK",
                    "urlToImage": "https://media.formula1.com/image/upload/t_16by9South/f_auto/q_auto/v1739961588/fom-website/2025/F1%2075%20Live/GettyImages-2200471441.jpg",
                    "publishedAt": "2025-02-19T12:01:54Z",
                    "content": "What a night the F1 75 Live season launch proved to be, as the 75th anniversary year of Formula 1 kicked off in style.\r\nFrom entertainment galore, to seeing all 20 drivers lining up in their 2025 col… [+540 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Managing Madrid"
                    },
                    "author": "Lucas Navarrete",
                    "title": "OFFICIAL: Bellingham suspended after red card against Osasuna - Managing Madrid",
                    "description": "The midfielder has been handed a two-match suspension.",
                    "url": "https://www.managingmadrid.com/2025/2/19/24368417/bellingham-real-madrid-suspension-osasuna-2025",
                    "urlToImage": "https://cdn.vox-cdn.com/thumbor/S6xkKg9aioG6QNOtdJvtT9EJH30=/0x0:5000x2618/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25879087/2199819769.jpg",
                    "publishedAt": "2025-02-19T12:00:58Z",
                    "content": "Real Madrids Jude Bellingham has been suspended for two La Liga matches, the Spanish Football Federation announced, following his red card in Saturdays controversial clash against Osasuna. The Englis… [+985 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "SempreMilan"
                    },
                    "author": "Oliver Fisher",
                    "title": "Theo slated, Pavlovic and Gimenez disagreements: Player ratings for Milan-Feyenoord from Italian papers - Sempre Milan",
                    "description": "Disaster struck for AC Milan last night as they were eliminated from the Champions League in the play-off round by Feyenoord at San Siro.",
                    "url": "https://sempremilan.com/player-ratings-milan-feyenoord-italian-papers",
                    "urlToImage": "https://icdn.sempremilan.com/wp-content/uploads/2025/02/gettyimages-2200442085-2048x2048-1.jpg",
                    "publishedAt": "2025-02-19T11:00:00Z",
                    "content": "Disaster struck for AC Milan last night as they were eliminated from the Champions League in the play-off round by Feyenoord at San Siro.\r\nWith a 1-0 first leg deficit to overcome, things could hardl… [+1517 chars]"
                },
                {
                    "source": {
                        "id": "associated-press",
                        "name": "Associated Press"
                    },
                    "author": null,
                    "title": "Raducanu approaches the umpire in tears and a man is ejected during a second-round match in Dubai - The Associated Press",
                    "description": "The Women's Tennis Association says concern over a man who’d exhibited fixated behavior caused Emma Raducanu to approach the chair umpire in tears and take an unscheduled break in her second-round match at the Dubai Championships. There was no immediate expla…",
                    "url": "https://apnews.com/article/raducanu-spectator-ejected-tennis-dubai-9b025c02af3518cf8b74d5a47b5edd4d",
                    "urlToImage": "https://dims.apnews.com/dims4/default/bf05054/2147483647/strip/true/crop/3085x1735+0+161/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F1b%2F48%2F9d3a2b3446cdd0501c18d2369321%2F5b57503fce364ef285d3a6c0315fde70",
                    "publishedAt": "2025-02-19T09:19:00Z",
                    "content": "DUBAI, United Arab Emirates (AP) Concern over a man whod exhibited fixated behavior caused Emma Raducanu to approach the chair umpire in tears and take an unscheduled break in her second-round match … [+1636 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Deseret News"
                    },
                    "author": "Jackson Payne",
                    "title": "What Kansas coach Bill Self said after losing to BYU - Deseret News",
                    "description": "The Cougars dominated the Jayhawks for a 91-57 victory Tuesday night.",
                    "url": "https://www.deseret.com/sports/2025/02/18/kansas-basketball-coach-bill-self-loss-against-byu-cougars/",
                    "urlToImage": "https://www.deseret.com/resizer/v2/LSU73LEZSRCT7KQFXHDAFD6XCU.jpg?focal=0%2C0&auth=a46925f2f86d987ffbfc581a682f90f86871b498da872cc699789618181ef498&width=1200&height=630",
                    "publishedAt": "2025-02-19T06:16:00Z",
                    "content": "Bill Self isnt used to losing like this.\r\nSelfs No. 23-ranked Kansas squad was blown out by BYU by a score of 91-57 Tuesday night at the Marriott Center, marking his worst regular season defeat in 22… [+2480 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "TwinCities.com-Pioneer Press"
                    },
                    "author": "Andy Greder",
                    "title": "Gophers sweep California teams with comeback win at UCLA - St. Paul Pioneer Press",
                    "description": "Minnesota (14-12, 6-9) swept the two California teams on the road over four days, with another double-digit comeback to beat USC 69-66 on Saturday. Only Big Ten leader Michigan has also done that t…",
                    "url": "https://www.twincities.com/2025/02/18/gophers-sweep-california-teams-with-comeback-win-at-ucla/",
                    "urlToImage": "https://www.twincities.com/wp-content/uploads/2025/02/stp-l-garcia-0220-01.jpg?w=1024&h=682",
                    "publishedAt": "2025-02-19T05:58:49Z",
                    "content": "To place an obituary, please include the information from the obituary checklist below in an email to obits@pioneerpress.com. There is no option to place them through our website.\r\nFeel free to conta… [+4498 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Floridagators.com"
                    },
                    "author": "Florida Gators",
                    "title": "FINAL: No. 2 Florida 85, Oklahoma 63 - Florida Gators",
                    "description": "A quick breakdown of Tuesday night's rout of the Sooners at the O'Dome.",
                    "url": "https://floridagators.com/news/2025/2/18/mens-basketball-final-florida-vs-oklahoma-february-18-2025.aspx",
                    "urlToImage": "https://d2b5htfb6s9xp9.cloudfront.net/images/2023/11/8/At_the_Buzzer_Chris_Harry_ivDLO.jpg?preset=large.socialmediaimage",
                    "publishedAt": "2025-02-19T05:24:18Z",
                    "content": "What Happened\r\nGAINESVILLE, Fla.   Senior guard Walter Clayton Jr. scored 18 points to lead five Florida players into double-figure scoring and the second-ranked Gators made quick and easy work of Ok… [+3192 chars]"
                }
            ]
        }
        case "business" : return {
            "status": "ok",
            "totalResults": 46,
            "articles": [
                {
                    "source": {
                        "id": null,
                        "name": "CNBC"
                    },
                    "author": "Michael Wayland",
                    "title": "Embattled EV maker Nikola files for Chapter 11 bankruptcy protection - CNBC",
                    "description": "Nikola – a once popular auto startup of investors – filed for bankruptcy protection after failing to secure a buyer or raise additional funds.",
                    "url": "https://www.cnbc.com/2025/02/19/nikola-chapter-11-bankruptcy-protection.html",
                    "urlToImage": "https://image.cnbcfm.com/api/v1/image/107198857-16771638812023-02-23t142204z_654493182_rc21hz92tkr5_rtrmadp_0_nikola-results.jpeg?v=1737669640&w=1920&h=1080",
                    "publishedAt": "2025-02-19T12:41:20Z",
                    "content": "DETROIT Nikola Corp. an auto startup that was once a favorite of Wall Street analysts and retail investors filed for bankruptcy protection after failing to secure a buyer or raise additional funds to… [+3237 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "POLITICO.eu"
                    },
                    "author": "Antoaneta Roussi",
                    "title": "Russian hackers find ways to snoop on Ukrainian Signal accounts - POLITICO Europe",
                    "description": "Phones found on the battlefield are being linked to Moscow’s intelligence services systems for spying, Google finds.",
                    "url": "https://www.politico.eu/article/russian-hackers-snoop-ukrainian-signal-accounts-google-report/",
                    "urlToImage": "https://www.politico.eu/cdn-cgi/image/width=1200,height=630,fit=crop,quality=80,onerror=redirect/wp-content/uploads/2025/02/19/GettyImages-1230537634-scaled.jpg",
                    "publishedAt": "2025-02-19T12:28:00Z",
                    "content": "In other cases, hackers have tricked Ukrainians into scanning malicious QR codes that, once scanned, link a victims account to the hackers interface, meaning future messages will be delivered both to… [+1244 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "BBC News"
                    },
                    "author": null,
                    "title": "Inflation jumps on food, air fares and school fees - BBC.com",
                    "description": "The government admits that stemming price rises will be 'bumpy' as inflation hit 3% in January.",
                    "url": "https://www.bbc.com/news/articles/c0l18pzrz00o",
                    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/82de/live/5136eda0-eeaa-11ef-8056-e9724e6c7c5a.jpg",
                    "publishedAt": "2025-02-19T11:47:49Z",
                    "content": "Michael RaceBusiness reporter, BBC News\r\nUK inflation jumped sharply in the year to January, driven by rising food prices, air fares and an increase in private school fees.\r\nThe higher-than-expected … [+5168 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "MarketWatch"
                    },
                    "author": "MarketWatch",
                    "title": "Stock Market Today: S&P 500 set to slip from record high amid latest Trump tariff talk; Fed minutes on tap - MarketWatch",
                    "description": null,
                    "url": "https://www.marketwatch.com/livecoverage/stock-market-today-s-p-eyes-fresh-record-as-nasdaq-and-dow-futures-also-gain",
                    "urlToImage": null,
                    "publishedAt": "2025-02-19T11:26:00Z",
                    "content": null
                },
                {
                    "source": {
                        "id": "cnn",
                        "name": "CNN"
                    },
                    "author": "Nathaniel Meyersohn",
                    "title": "Target retreated on DEI. Then came the backlash - CNN",
                    "description": "Target is facing backlash for its DEI pullback from customers, the heirs to one of its founders and civil rights activists.",
                    "url": "https://www.cnn.com/2025/02/19/business/target-dei-boycott/index.html",
                    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2166839424-copy-20250218203757926.jpg?c=16x9&q=w_800,c_fill",
                    "publishedAt": "2025-02-19T11:00:00Z",
                    "content": "Almost a month after Target said it was ending some of its diversity, equity and inclusion (DEI) programs, the company is facing backlash from customers, the heirs to one of its founders and civil ri… [+9682 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "MarketWatch"
                    },
                    "author": "Steve Goldstein",
                    "title": "A Chinese paper finds ChatGPT can forecast economy and the stock market. - MarketWatch",
                    "description": "",
                    "url": "https://www.marketwatch.com/story/a-chinese-paper-finds-chatgpt-not-deepseek-can-generate-stock-market-returns-but-the-key-insight-doesnt-have-anything-to-do-with-ai-ae3c9e5f",
                    "urlToImage": "https://images.mktw.net/im-49487188/social",
                    "publishedAt": "2025-02-19T10:10:00Z",
                    "content": "Steven Goldstein is based in London and responsible for MarketWatch's coverage of financial markets in Europe, with a particular focus on global macro and commodities. Previously, he was Washington b… [+121 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "HuffPost"
                    },
                    "author": "Ed Mazza",
                    "title": "UH-OH: Trump Just Publicly Abandoned 1 Of His Biggest 'Day One' Promises - Yahoo",
                    "description": "Trump vowed to control this on his first day in office. Now, he says he had \"nothing to do with\" the latest turn of events.",
                    "url": "https://www.huffpost.com/entry/trump-inflation-promise_n_67b589fae4b04f1801af34e5",
                    "urlToImage": "https://media.zenfs.com/en/the_huffington_post_584/628f4d7e67993907e3d2a118e238b2fe",
                    "publishedAt": "2025-02-19T09:18:34Z",
                    "content": "President Donald Trump this week admitted that prices are rising but insisted that its not his fault despite repeatedly claiming he would bring prices down on his first day in office.\r\nInflation is b… [+2080 chars]"
                },
                {
                    "source": {
                        "id": "business-insider",
                        "name": "Business Insider"
                    },
                    "author": "James Rodriguez",
                    "title": "America is about to enter an apartment crunch - Business Insider",
                    "description": "A historic wave of apartment construction is drawing to a close, which means rents may soon start rising again.",
                    "url": "https://www.businessinsider.com/rent-going-up-costs-apartment-construction-housing-shortage-landlord-concessions-2025-2",
                    "urlToImage": "https://i.insider.com/67b49ff07bb3f854015d1de2?width=1200&format=jpeg",
                    "publishedAt": "2025-02-19T09:07:00Z",
                    "content": "Renters have quietly enjoyed a nice run over the past two years. A historic wave of apartment construction has tamped down rents from their pandemic-era peak last year developers finished the most un… [+9047 chars]"
                }
            ]
        }
        case "entertainment": return {
            "status": "ok",
            "totalResults": 24,
            "articles": [
                {
                    "source": {
                        "id": null,
                        "name": "AL.com"
                    },
                    "author": "Mark Heim | mheim@al.com",
                    "title": "Hollywood power couple suffers break-in - AL.com",
                    "description": "It is the latest in a string of break-ins.",
                    "url": "https://www.al.com/life/2025/02/hollywood-power-couple-suffers-break-in.html",
                    "urlToImage": "https://www.al.com/resizer/v2/PDNNMYH7BNCJBIV546VK42EE6U.jpg?auth=a603488b788c0f7e808dfcfd60b4946444f9a76d34c4595d45d3e96dba9388c0&width=1280&quality=90",
                    "publishedAt": "2025-02-19T12:47:00Z",
                    "content": "Nicole Kidman, left, and Keith Urban attend The Metropolitan Museum of Art's Costume Institute benefit gala celebrating the opening of the \"Sleeping Beauties: Reawakening Fashion\" exhibition on Monda… [+1137 chars]"
                },
                {
                    "source": {
                        "id": "cnn",
                        "name": "CNN"
                    },
                    "author": "Lisa Respers France",
                    "title": "Rihanna reacts to A$AP Rocky not guilty verdict - CNN",
                    "description": "The world watched as A$AP Rocky flung himself into his partner Rihanna’s arms after he was acquitted Tuesday and now she has shared her joy.",
                    "url": "https://www.cnn.com/2025/02/19/entertainment/rihanna-asap-rocky-verdict-reaction/index.html",
                    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/2025-02-19t013353z-970232582-rc2dxcag9eqq-rtrmadp-3-people-asap-rocky-court.JPG?c=16x9&q=w_800,c_fill",
                    "publishedAt": "2025-02-19T11:51:00Z",
                    "content": "The world watched as A$AP Rocky flung himself into his partner Rihannas arms after he was acquitted Tuesday and now she has shared her joy.\r\nThe superstar singer and mogul posted about her feelings o… [+1690 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "BBC News"
                    },
                    "author": null,
                    "title": "'Grow up': Kevin Spacey responds to Guy Pearce’s claim that he ‘targeted’ him - BBC.com",
                    "description": "Spacey told Pearce he \"is not a victim\" after the Brutalist star spoke about his behaviour.",
                    "url": "https://www.bbc.com/news/articles/c0rzwjq9znro",
                    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/59ba/live/cd00e260-eea0-11ef-ae88-5b98a925ff77.jpg",
                    "publishedAt": "2025-02-19T11:42:10Z",
                    "content": "Paul Glynn\r\nKevin Spacey has responded to fellow actor Guy Pearce's allegation that the Oscar-winner \"targeted\" him during the making of 1997 movie LA Confidential, telling the Australian to \"grow up… [+3417 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Variety"
                    },
                    "author": "Ellise Shafer",
                    "title": "Blake Lively: Justin Baldoni Made Two Other Women Uncomfortable on Set - Variety",
                    "description": "Blake Lively alleged that Justin Baldoni made two other women on the set of \"It Ends With Us\" \"uncomfortable\" and they will testify.",
                    "url": "https://variety.com/2025/film/news/blake-lively-justin-baldoni-made-two-other-women-uncomfortable-set-1236312765/",
                    "urlToImage": "https://variety.com/wp-content/uploads/2025/01/lively-baldoni.jpg?w=1000&h=563&crop=1",
                    "publishedAt": "2025-02-19T10:35:00Z",
                    "content": "In an amended complaint filed late Tuesday night, Blake Lively alleged that her “It Ends With Us” co-star Justin Baldoni made two other women on the set of the film “uncomfortable” — and they’re will… [+3265 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "BBC News"
                    },
                    "author": null,
                    "title": "Kim Sae-ron's death exposes South Korea's celebrity culture - BBC.com",
                    "description": "Analysts say they are not optimistic that the ruthless \"cancel culture\" surrounding the industry will change.",
                    "url": "https://www.bbc.com/news/articles/c86pl55x0qno",
                    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/2874/live/0a59d0c0-ee99-11ef-9801-c57727162a89.jpg",
                    "publishedAt": "2025-02-19T10:18:14Z",
                    "content": "Kim Sae-ron's death has prompted calls for people to be given a second chance\r\nActress Kim Sae-ron's death in an apparent suicide has renewed criticism of South Korea's entertainment industry, which … [+5209 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "The Cut"
                    },
                    "author": "Claire Comstock-Gay",
                    "title": "Your Daily Horoscope by Madame Clairevoyant: February 19, 2025 - The Cut",
                    "description": "Every weekday, the Cut’s astrology expert, Claire Comstock-Gay (aka Madame Clairevoyant) reads the horoscope for every zodiac sign.",
                    "url": "http://www.thecut.com/article/your-daily-horoscope-madame-clairevoyant-feb-19-2025.html",
                    "urlToImage": "https://pyxis.nymag.com/v1/imgs/3d9/a6f/211128e224913ad0523afd55abb50c1ba4-cindy-aquarius.1x.rsocial.w1200.jpg",
                    "publishedAt": "2025-02-19T10:00:26Z",
                    "content": "Lately, your emotions have been intense and close to the surface; the mildest disagreements can set you off, threatening to derail your day. Maybe youve tried to set your feelings aside and go about … [+6810 chars]"
                },
                {
                    "source": {
                        "id": "fox-news",
                        "name": "Fox News"
                    },
                    "author": "Stephanie Nolasco",
                    "title": "Meghan Markle rushes 'cringeworthy' rebrand after trademark woes: expert - Fox News",
                    "description": "Just weeks before Netflix premieres Meghan Markle's lifestyle series, \"With Love, Meghan,\" the Duchess of Sussex announced her lifestyle brand's new name.",
                    "url": "https://www.foxnews.com/entertainment/meghan-markle-rushes-cringeworthy-rebrand-trademark-woes-expert",
                    "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2025/02/99c14978-getty_meghanmarkle.jpg",
                    "publishedAt": "2025-02-19T09:00:00Z",
                    "content": "Join Fox News for access to this content\r\nPlus special access to select articles and other premium content with your account - free of charge.\r\nBy entering your email and pushing continue, you are ag… [+7727 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Variety"
                    },
                    "author": "Zack Sharf",
                    "title": "MAGA Outrage Over Tom Hanks’ ‘SNL50’ Sketch Is Understandable, Says Joy Behar: They Made ‘Anyone Who Voted for Trump Look Like a Racist’ - AOL",
                    "description": "Tom Hanks’ surprise appearance at “SNL50” sparked Republican backlash on social media, but some outspoken Democrats such as “The View” co-host Joy Behar unde...",
                    "url": "https://variety.com/2025/tv/news/tom-hanks-maga-backlash-snl-joy-behar-1236312142/",
                    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/gBxjnb0Xr7X0JsUlauyn1g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03NzA-/https://media.zenfs.com/en/aol_variety_168/a1fc10607f0872212b099581cab42f8d",
                    "publishedAt": "2025-02-19T04:53:57Z",
                    "content": "Tom Hanks surprise appearance at SNL50 sparked Republican backlash on social media, but some outspoken Democrats such as The View co-host Joy Behar understand the outrage. Hanks popped up as Donald T… [+1900 chars]"
                },
                {
                    "source": {
                        "id": "entertainment-weekly",
                        "name": "Entertainment Weekly"
                    },
                    "author": "https://www.facebook.com/entertainmentweekly",
                    "title": "B.J. Novak gives loving tribute to Office costar Mindy Kaling: 'We always knew you'd be famous' - Entertainment Weekly News",
                    "description": "Ryan and Kelly forever! B.J. Novak gives adorably touching tribute (and at times, roast) for his 'The Office' costar Mindy Kaling's Hollywood Walk of Fame star ceremony: 'We always knew you would be famous, but we had no idea how beautifully you’d handle the …",
                    "url": "https://ew.com/bj-novak-loving-tribute-office-costar-mindy-kaling-11682104",
                    "urlToImage": "https://ew.com/thmb/qOws5KFyQRSPnG0kFrjxosJadgI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Mindy-Kaling-as-Kelly-Kapoor-and-B.J.-Novak-as-Ryan-Howard-the-office-021825-2-7819cbe282a747de9c7ad05cf03b1286.jpg",
                    "publishedAt": "2025-02-19T02:20:42Z",
                    "content": "Heads up Office fans Ryan and Kelly are together again, this time for a very special reason.\r\nB.J. Novak was on hand Tuesday for Mindy Kaling's ceremony to receive her star on the Hollywood Walk of F… [+3030 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Wrestletalk.com"
                    },
                    "author": "Connel Rumsey",
                    "title": "Top TNA Star Appears On WWE NXT - https://wrestletalk.com/",
                    "description": "A top TNA Wrestling star made a surprise appearance to kick off tonight's WWE NXT, challenging NXT Champion Oba Femi.",
                    "url": "https://wrestletalk.com/news/top-tna-star-appears-wwe-nxt-moose/",
                    "urlToImage": "https://cdn.wrestletalk.com/wp-content/uploads/2024/11/TNA-Wrestling-Impact-Logo.jpg",
                    "publishedAt": "2025-02-19T01:19:48Z",
                    "content": "tna\r\nA top TNA Wrestling star made a surprise appearance to kick off tonight’s WWE NXT, challenging NXT Champion Oba Femi.\r\nTonight’s WWE NXT show was the first show since this past weekend’s WWE Ven… [+1301 chars]"
                }
            ]
        }
        case "health": return {
            "status": "ok",
            "totalResults": 64,
            "articles": [
                {
                    "source": {
                        "id": null,
                        "name": "SciTechDaily"
                    },
                    "author": null,
                    "title": "Popular Birth Control Pills Linked to Increased Risk of Stroke and Heart Attack - SciTechDaily",
                    "description": "Researchers state that while the absolute risk is low, it should still be taken into account when prescribing these products. A large Danish study published in The BMJ finds that certain hormonal contraceptives are linked to an increased risk of stroke and he…",
                    "url": "https://scitechdaily.com/popular-birth-control-pills-linked-to-increased-risk-of-stroke-and-heart-attack/",
                    "urlToImage": "https://scitechdaily.com/images/Birth-Control-Pills.jpg",
                    "publishedAt": "2025-02-19T13:31:01Z",
                    "content": "A Danish study in The BMJ found that estrogen-containing contraceptives, especially the vaginal ring and skin patch, increase stroke and heart attack risk. The combined pill doubles the risk, while n… [+5059 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "PEOPLE"
                    },
                    "author": "Cara Lynn Shultz",
                    "title": "Eating from Plastic Takeout Containers Can Cause ‘Extensive’ Heart Damage, Increase Risk of Cardiovascular Disease - AOL",
                    "description": "A new study found chemicals can leach from plastic takeout containers into food, impacting the gut biome—and then the heart",
                    "url": "https://people.com/eating-from-plastic-takeout-containers-can-cause-extensive-heart-damage-11681064",
                    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/QfQy9GTBosiaBNSJg7LHfw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/aol_people_articles_471/62229d35967e4f55ec91744cecc3f6ba",
                    "publishedAt": "2025-02-19T12:01:34Z",
                    "content": "Getty\r\n Stock image of hot food in a plastic takeout container.\r\nEating from plastic takeout containers can increase your risk of congestive heart failure, and even short-term exposure to particles l… [+2474 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Thedispatch.com"
                    },
                    "author": "Charlotte Lawson, Grayson Logue, James P. Sutton, Cole Murphy",
                    "title": "Bird Flu Outbreak Continues to Spread - The Dispatch",
                    "description": "‘What’s concerning is the spillover events to humans.’",
                    "url": "https://thedispatch.com/newsletter/morning/bird-flu-outbreak-continues-to-spread/",
                    "urlToImage": "https://thedispatch.com/wp-content/uploads/2025/02/GettyImages-2200487013.jpg?w=1024",
                    "publishedAt": "2025-02-19T11:03:03Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "nj.com"
                    },
                    "author": "Kevin Manahan | NJ Advance Media for NJ.com",
                    "title": "Flu outbreak is causing a deadly children’s brain illness: What you should know - NJ.com",
                    "description": "Here's what parents should look for",
                    "url": "https://www.nj.com/politics/2025/02/flu-outbreak-is-causing-a-deadly-childrens-brain-illness-what-are-the-symptoms.html",
                    "urlToImage": "https://www.nj.com/resizer/v2/U375WJNKDVGBHO7KOXVXWYSEUE.jpg?auth=4af9ca9503f619000974cd659feef2468c8ab9f64a1cdcb16d7e735780a73a47&width=1280&quality=90",
                    "publishedAt": "2025-02-19T11:00:00Z",
                    "content": "As vaccine-denier, conspiracy theorist and science-skeptic Robert F. Kennedy Jr. takes control of the Trump Administrations Department of Health and Human Services, many doctors are sounding the alar… [+3243 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Tom's Guide"
                    },
                    "author": "Sam Hopes",
                    "title": "Adding salt to your water is trending, so I tried it — and here's what happened after just two weeks - Tom's Guide",
                    "description": "Could a pinch of salt be a touch of magic?",
                    "url": "https://www.tomsguide.com/wellness/fitness/adding-salt-to-your-water-is-trending-so-i-tried-it-heres-what-happened-to-my-body-after-two-weeks",
                    "urlToImage": "https://cdn.mos.cms.futurecdn.net/vfxFqG9U8tQamhhxvRaxgn-1200-80.jpg",
                    "publishedAt": "2025-02-19T09:52:32Z",
                    "content": "It’s not just a TikTok trend, everyone. Naturally, though, TikTok has picked it up and sent the #saltwater trend skyrocketing. People have been adding salt to their water for decades, and there are r… [+8554 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "The-express.com"
                    },
                    "author": "Fiona Callingham, Ellie Hook",
                    "title": "Doctor warns 'early' sign of dementia appears when watching TV - what to look out for - Daily Express US",
                    "description": "Dementia is a syndrome, or a group of associated symptoms, linked to the ongoing decline of the brain, and early symptoms can first appear when watching TV.",
                    "url": "https://www.the-express.com/news/health/164100/doctor-warns-early-sign-dementia-appears-watching-tv",
                    "urlToImage": "https://cdn-images.the-express.com/img/dynamic/19/1200x630/333299.jpg",
                    "publishedAt": "2025-02-19T08:23:23Z",
                    "content": "A dementia expert has raised the alarm, cautioning that an \"early\" indicator of the condition could surface during a familiar activity such as watching television.\r\nDr. Tim Rittman, a neurology consu… [+3086 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "BBC News"
                    },
                    "author": null,
                    "title": "Philippines: Cash reward for mosquitoes to beat dengue in Manila - BBC.com",
                    "description": "Officials in central Manila are offering two pesos for every five mosquitoes captured, dead or alive.",
                    "url": "https://www.bbc.com/news/articles/cvgdr4r2l31o",
                    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/4127/live/8ca2ce50-ee7c-11ef-9e47-9dc60274271f.jpg",
                    "publishedAt": "2025-02-19T06:06:09Z",
                    "content": "Authorities in one of the Philippines' most densely-populated urban centres are offering a cash reward for mosquitoes in an attempt to stop the spread of dengue.\r\nCarlito Cernal, village chief of Bar… [+2993 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Live Science"
                    },
                    "author": "Christoph Schwaiger",
                    "title": "Diagnostic dilemma: Weakness in a man's leg revealed his abnormally small brain - Livescience.com",
                    "description": "A man went to hospital complaining about weakness in his left leg, and subsequent brain scans revealed a surprising finding.",
                    "url": "https://www.livescience.com/health/diagnostic-dilemma-weakness-in-a-mans-leg-revealed-his-abnormally-small-brain",
                    "urlToImage": "https://cdn.mos.cms.futurecdn.net/WmNhaePCzmBZDL3BYWTH5a-1200-80.jpg",
                    "publishedAt": "2025-02-19T06:01:41Z",
                    "content": "The patient: A 44-year-old man in France\r\nThe symptoms: For two weeks prior to going to the doctor, the man had been feeling mild weakness in his left leg. There weren't any notable abnormalities in … [+2579 chars]"
                }
            ]
        }
        case "science": return {
            "status": "ok",
            "totalResults": 63,
            "articles": [
                {
                    "source": {
                        "id": null,
                        "name": "BBC News"
                    },
                    "author": "Jennifer Malloy",
                    "title": "Canada's remote (but accessible) dark-sky sanctuary - BBC.com",
                    "description": "Spanning 11,000 sq km of protected, pristine wilderness, Jasper National Park offers a one-of-a-kind destination for stargazers.",
                    "url": "https://www.bbc.com/travel/article/20250218-jasper-canadas-remote-but-accessible-dark-sky-sanctuary",
                    "urlToImage": "https://ychef.files.bbci.co.uk/624x351/p0ks1yx1.jpg",
                    "publishedAt": "2025-02-19T13:00:00Z",
                    "content": "Spanning 11,000 sq km of protected, pristine wilderness, Jasper National Park offers a one-of-a-kind destination for stargazers.\r\nIt's a balmy October evening and an overture from the Edmonton Sympho… [+8658 chars]"
                },
                {
                    "source": {
                        "id": "cnn",
                        "name": "CNN"
                    },
                    "author": "Ashley Strickland",
                    "title": "Webb telescope spies the Milky Way’s black hole constantly ‘bubbling’ with light - CNN",
                    "description": "The James Webb Space Telescope has shown that the Milky Way’s black hole is constantly blazing with light, releasing long flares as well as short flashes every day.",
                    "url": "https://www.cnn.com/2025/02/19/science/milky-way-black-hole-flickers-webb/index.html",
                    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/stsci-01jkre5xe0dh3pj39cg89qf7z6.jpg?c=16x9&q=w_800,c_fill",
                    "publishedAt": "2025-02-19T12:31:00Z",
                    "content": "Sign up for CNNs Wonder Theory science newsletter. Explore the universe with news on fascinating discoveries, scientific advancements and more.\r\nAstronomers using the James Webb Space Telescope have … [+7949 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Space.com"
                    },
                    "author": "Stefanie Waldek",
                    "title": "7 planets are aligned in the night sky right now. But what's that mean for science? - Space.com",
                    "description": "Not much, unless we're talking about spacecraft.",
                    "url": "https://www.space.com/planetary-alignments-mean-for-science-astronomy",
                    "urlToImage": "https://cdn.mos.cms.futurecdn.net/ovF3rpHvPJFANYSdQrbnnB-1200-80.jpg",
                    "publishedAt": "2025-02-19T11:00:00Z",
                    "content": "For the last month and change, you might've seen the headlines about the planetary alignment, or a planetary parade, going on in our solar system. And that's true. In January 2025, Venus, Mars, Jupit… [+5566 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "BBC News"
                    },
                    "author": "Jasmin Fox-Skelly",
                    "title": "Your kitchen sponge teems with bacteria – should you use a brush instead? - BBC.com",
                    "description": "We use them to clean the dishes we eat off, but your kitchen sponge is a damp, crumb-filled environment that is perfect for bacteria to thrive in. Is a washing up brush better?",
                    "url": "https://www.bbc.com/future/article/20250218-when-should-you-throw-away-your-kitchen-sponge",
                    "urlToImage": "https://ychef.files.bbci.co.uk/624x351/p0ks1lsb.jpg",
                    "publishedAt": "2025-02-19T10:00:00Z",
                    "content": "We use them to clean the dishes we eat off, but your kitchen sponge is a damp, crumb-filled environment that is perfect for bacteria to thrive in. Should you opt for a washing up brush instead?\r\nMany… [+7681 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "BBC News"
                    },
                    "author": null,
                    "title": "Spacewalk training 'nothing like diving' - NI's first astronaut - BBC.com",
                    "description": "Northern Ireland's first ever astronaut candidate says the space sector is \"very much changing\".",
                    "url": "https://www.bbc.com/news/articles/c337nmlyxn2o",
                    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/5d8c/live/45be1c70-eed0-11ef-a319-fb4e7360c4ec.png",
                    "publishedAt": "2025-02-19T09:39:28Z",
                    "content": "Barry O'Connor\r\nNorthern Irish astrophysicist Dr Rosemary Coogan completed basic training with the European Space Agency last year\r\nDr Rosemary Coogan - Northern Ireland's first ever astronaut - has … [+3988 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Forbes"
                    },
                    "author": "Siladitya Ray",
                    "title": "Musk Says US Astronauts Are Stranded On Space Station For ‘Political Reasons’—As They Reject Claim - Forbes",
                    "description": "In a joint interview with President Donald Trump on Fox News, Musk falsely blamed the Biden administration for not bringing back the astronauts sooner.",
                    "url": "https://www.forbes.com/sites/siladityaray/2025/02/19/musk-says-astronauts-stranded-on-space-station-for-political-reasons-days-after-they-refuted-the-claim/",
                    "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/67b5a0d54553345828e62e8d/0x0.jpg?format=jpg&crop=2533,1426,x0,y130,safe&height=900&width=1600&fit=bounds",
                    "publishedAt": "2025-02-19T09:15:50Z",
                    "content": "Elon Musk suggested the two U.S. astronauts who have been on the International Space Station since June last yeardue to safety issues with their return vessel, the Boeing Starlinerwere left abandoned… [+4241 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Post Magazine"
                    },
                    "author": null,
                    "title": "Chinese scientists unveil potential game-changer in use of superconductors - South China Morning Post",
                    "description": "It makes nickel just the third class of materials to achieve this feat above the threshold of minus 233 degrees Celsius at ‘normal’ pressure.",
                    "url": "https://www.scmp.com/news/china/science/article/3299254/chinese-scientists-create-new-superconducting-material-based-nickel",
                    "urlToImage": "https://cdn.i-scmp.com/sites/default/files/styles/og_image_scmp_generic/public/d8/images/canvas/2025/02/19/a28f5ecf-7ba0-4530-8852-4c2de386eb5b_432f1df6.jpg?itok=FnBAuAn5&v=1739939602",
                    "publishedAt": "2025-02-19T08:00:09Z",
                    "content": "Chinese physicists say they have created a new type of high-temperature superconductor at ambient pressure based on nickel a breakthrough in the field.\r\nIt makes nickel just the third class of materi… [+1074 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Theregister.com"
                    },
                    "author": "Iain Thomson",
                    "title": "Einstein Probe finds two stars that have spent 40 million years taking turns eating each other - The Register",
                    "description": "Odd X-ray flashes gave the game away, just few weeks after China-led mission launched",
                    "url": "https://www.theregister.com/2025/02/19/einstein_probe_twin_stars_revealed/",
                    "urlToImage": "https://regmedia.co.uk/2025/02/19/einstein_probe.jpg",
                    "publishedAt": "2025-02-19T07:01:00Z",
                    "content": "The Einstein Probe telescope has spotted evidence of one star consuming matter from another.\r\nThe first clue that led to this discovery was an X-ray flash emanating from the Small Magellanic Cloud, a… [+3504 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Phys.Org"
                    },
                    "author": "Issam Ahmed with Daniel Lawler in Paris",
                    "title": "'City killer' asteroid now has 3.1% chance of hitting Earth: NASA - Phys.org",
                    "description": "An asteroid that could level a city now has a 3.1-percent chance of striking Earth in 2032, according to NASA data released Tuesday—making it the most threatening space rock ever recorded by modern forecasting.",
                    "url": "https://phys.org/news/2025-02-city-killer-asteroid-chance-earth.html",
                    "urlToImage": "https://scx2.b-cdn.net/gfx/news/2025/this-handout-picture-p-1.jpg",
                    "publishedAt": "2025-02-19T06:53:27Z",
                    "content": "An asteroid that could level a city now has a 3.1-percent chance of striking Earth in 2032, according to NASA data released Tuesdaymaking it the most threatening space rock ever recorded by modern fo… [+4328 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "ScienceAlert"
                    },
                    "author": "Carly Cassella",
                    "title": "Scientists Put a Human Language Gene Into Mice And Changed Their Voice - ScienceAlert",
                    "description": "A new contender for a human 'language gene' can change the way that mice squeak when it is incorporated into their DNA.",
                    "url": "https://www.sciencealert.com/scientists-put-a-human-language-gene-into-mice-and-changed-their-voice",
                    "urlToImage": "https://www.sciencealert.com/images/2025/02/MouseBrain.jpg",
                    "publishedAt": "2025-02-19T06:38:45Z",
                    "content": "A new contender for a human 'language gene' can change the way that mice squeak when it is incorporated into their DNA.\r\nThe gene is called NOVA1, and in our own species, it is remarkably unique. Whi… [+4762 chars]"
                }
            ]
        }
        case "technology": return {
            "status": "ok",
            "totalResults": 45,
            "articles": [
                {
                    "source": {
                        "id": null,
                        "name": "Nintendo Life"
                    },
                    "author": "PJ O'Reilly",
                    "title": "Hands On: Xenoblade Chronicles X: Definitive Edition - A Decade On, Mira's Still Got It - Nintendo Life",
                    "description": "A Skell of a good time",
                    "url": "https://www.nintendolife.com/previews/hands-on-xenoblade-chronicles-x-definitive-edition-a-decade-on-miras-still-got-it",
                    "urlToImage": "https://images.nintendolife.com/26c62de883e3a/1280x720.jpg",
                    "publishedAt": "2025-02-19T14:00:00Z",
                    "content": "Image: Nintendo Life\r\nIt's been absolutely ages since we last set foot on Mira, the planet on which humanity seeks refuge from an alien threat in Xenoblade Chronicles X. It was perhaps only a year or… [+7389 chars]"
                },
                {
                    "source": {
                        "id": "wired",
                        "name": "Wired"
                    },
                    "author": "Chris Haslam",
                    "title": "Your Earbuds Are Gross. Here’s How to Clean Them Properly - WIRED",
                    "description": "Filthy buds look bad, impact sound quality and even risk infection. WIRED asked the experts how to correctly banish that ear gunk.",
                    "url": "https://www.wired.com/story/your-earbuds-are-gross-heres-how-to-clean-them-properly/",
                    "urlToImage": "https://media.wired.com/photos/67b4ea32e3e0b9831f2dbce5/191:100/w_1280,c_limit/airpod-cleaning-gear.jpg",
                    "publishedAt": "2025-02-19T13:00:00Z",
                    "content": "Have you looked closely at your earbuds lately? I did, and I was horrified at how gross they were. My trusty Apple AirPods had become so mucky and caked in ear wax I was genuinely embarrassed, and al… [+3558 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Tom's Guide"
                    },
                    "author": "Jason England",
                    "title": "Where to buy RTX 5070, RTX 5080 and RTX 5090 — live updates and stock checker - Tom's Guide",
                    "description": "Here's where to get Nvidia's most powerful GPUs yet!",
                    "url": "https://www.tomsguide.com/news/live/where-to-buy-rtx-5070-rtx-5080-rtx-5090",
                    "urlToImage": "https://cdn.mos.cms.futurecdn.net/ax65iX32yh47dRY2KsUyKA-1200-80.jpg",
                    "publishedAt": "2025-02-19T11:58:51Z",
                    "content": "2025-02-19T15:08:12.276ZThe RTX 5070 Ti reviews are in — opinions are mixed\r\nThe embargo has lifted and the reviewer impressions fall largely in line with what we saw with our RTX 5090 testing and RT… [+7618 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Decrypt"
                    },
                    "author": "Connor Sephton",
                    "title": "New Malware Can Steal Crypto on Apple macOS Devices: Microsoft - Decrypt",
                    "description": "The latest version of XCSSET can also record a victim's screen—and even manipulate the Bitcoin addresses that appear in their browser.",
                    "url": "https://decrypt.co/306656/new-malware-can-steal-crypto-on-apple-macos-devices-microsoft",
                    "urlToImage": "https://cdn.decrypt.co/resize/1024/height/512/wp-content/uploads/2025/02/Apple-macOS-Sequoia-gID_7.jpg",
                    "publishedAt": "2025-02-19T11:43:45Z",
                    "content": "If you're on an Apple macOS device right now, you might want to keep reading.\r\nResearchers from Microsoft Threat Intelligence have uncovered a new variant of malware that can target crypto wallets.\r\n… [+2580 chars]"
                },
                {
                    "source": {
                        "id": "ign",
                        "name": "IGN"
                    },
                    "author": "Wesley Yin-Poole",
                    "title": "Information-Starved The Elder Scrolls 6 Fans Use Official Create-a-Character Competition to Come Up With a Release Date - IGN",
                    "description": "The Elder Scrolls 6 fans are, a bit like Grand Theft Auto 6 fans, starved of information. And so perhaps it comes as no surprise to see the community go into release date speculation mode with only an official create a character competition to go on.",
                    "url": "https://www.ign.com/articles/information-starved-the-elder-scrolls-6-fans-use-official-create-a-character-competition-to-come-up-with-a-release-date",
                    "urlToImage": "https://assets1.ignimgs.com/2019/06/17/5-es6-1560804827894.jpg?width=1280",
                    "publishedAt": "2025-02-19T11:29:44Z",
                    "content": "The Elder Scrolls 6 fans are, a bit like Grand Theft Auto 6 fans, starved of information. And so perhaps it comes as no surprise to see the community go into release date speculation mode with only a… [+3161 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "MacRumors"
                    },
                    "author": "Tim Hardwick",
                    "title": "iPhone 17 Pro: Apple Has 'Tested' Wireless Reverse Charging Feature - MacRumors",
                    "description": "Apple has reportedly tested a wireless reverse charging feature for its upcoming iPhone 17 Pro models that would make the iPhone capable of...",
                    "url": "https://www.macrumors.com/2025/02/19/iphone-17-pro-reverse-charging-feature/",
                    "urlToImage": "https://images.macrumors.com/t/pcFFdS4vr2FNj067Dc-tlrKKPl8=/3840x/article-new/2025/02/iphone-17-pro-asherdipps.jpg",
                    "publishedAt": "2025-02-19T11:26:39Z",
                    "content": "Apple has reportedly tested a wireless reverse charging feature for its upcoming iPhone 17 Pro models that would make the iPhone capable of delivering power to other Apple devices, according to the W… [+1816 chars]"
                },
                {
                    "source": {
                        "id": "ign",
                        "name": "IGN"
                    },
                    "author": null,
                    "title": "Pokémon Go Developer Niantic Reportedly in Talks to Sell Video Game Business to Saudi-Owned Company Behind Stumble Guys - IGN",
                    "description": null,
                    "url": "https://www.ign.com/articles/pokmon-go-developer-niantic-reportedly-in-talks-to-sell-video-game-business-to-saudi-owned-company-behind-stumble-guys",
                    "urlToImage": null,
                    "publishedAt": "2025-02-19T11:10:31Z",
                    "content": "Description: Group Number: Group Name: Ip Address: Username: Computer Name:"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Tom's Guide"
                    },
                    "author": "John Velasco",
                    "title": "iPhone SE 4 live updates — last-minute rumors and all the big news as it happens - Tom's Guide",
                    "description": "Apple February launch live — iPhone SE 4, Apple Intelligence, AirTag 2, HomePod and more",
                    "url": "https://www.tomsguide.com/news/live/iphone-se-4-launch-latest-news-apple-launch",
                    "urlToImage": "https://cdn.mos.cms.futurecdn.net/3rQ5UzaXwwK7hXSJAZgbSk-1200-80.jpg",
                    "publishedAt": "2025-02-19T10:53:36Z",
                    "content": "2025-02-19T12:19:43.310ZThe first phone with Apple's own 5G modem (with a catch)\r\n(Image credit: @SonnyDickson on X)\r\nThere's potentially good news and bad news with the iPhone SE 4's modem. The good… [+14692 chars]"
                },
                {
                    "source": {
                        "id": "ign",
                        "name": "IGN"
                    },
                    "author": "Wesley Yin-Poole",
                    "title": "Marvel Rivals Director and Entire Seattle Design Team Laid Off, NetEase Tells Fans Not to Worry About the Game - IGN",
                    "description": "Marvel Rivals developer NetEase has confirmed cuts to its Seattle-based design team for \"organizational reasons.\"",
                    "url": "https://www.ign.com/articles/marvel-rivals-director-and-entire-seattle-design-team-laid-off-netease-tells-fans-not-to-worry-about-the-game",
                    "urlToImage": "https://assets-prd.ignimgs.com/2025/01/07/marvelrivalsfantastic-blogroll-1736213527006.jpg?width=1280",
                    "publishedAt": "2025-02-19T10:04:57Z",
                    "content": "Marvel Rivals developer NetEase has confirmed cuts to its Seattle-based design team for organizational reasons.\r\nOvernight, Marvel Rivals game director Thaddeus Sasser took to LinkedIn to announce th… [+2667 chars]"
                }
            ]
        }
        default: return {} 
    }
}

export default getData;