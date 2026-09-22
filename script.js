console.log("JavaScript is working!");
console.log(document.body.id);

const songs1990 = [
    { title: "Public Enemy - Brothers Gonna Work It Out", youtubeUrl: "https://www.youtube.com/watch?v=pL2vVWEgKE0&list=RDpL2vVWEgKE0&start_radio=1" },
    { title: "LL Cool J - Mama Said Knock You Out", youtubeUrl: "https://www.youtube.com/watch?v=vimZj8HW0Kg&list=RDvimZj8HW0Kg&start_radio=1" },
    { title: "A Tribe Called Quest - Bonita Applebum", youtubeUrl: "https://www.youtube.com/watch?v=6xE6ZWwJezg&list=RD6xE6ZWwJezg&start_radio=1" },
    { title: "Eric B. & Rakim - Let the Rhythm Hit 'Em", youtubeUrl: "https://www.youtube.com/watch?v=P2wMJ3Liq5Y&list=RDP2wMJ3Liq5Y&start_radio=1" },
    { title: "EPMD - Gold Digger", youtubeUrl: "https://www.youtube.com/watch?v=5HN58C3JsUM&list=RD5HN58C3JsUM&start_radio=1" },
    { title: "Gang Starr - Just to Get a Rep", youtubeUrl: "https://www.youtube.com/watch?v=qAjAdM25KHE&list=RDqAjAdM25KHE&start_radio=1" },
    { title: "Public Enemy - 911 Is a Joke", youtubeUrl: "https://www.youtube.com/watch?v=JZDIitWz8Go&list=RDJZDIitWz8Go&start_radio=1" },
    { title: "A Tribe Called Quest - Can I Kick It?", youtubeUrl: "https://www.youtube.com/watch?v=O3pyCGnZzYA&list=RDO3pyCGnZzYA&start_radio=1" },
    { title: "Boogie Down Productions - Love's Gonna Get'cha (Material Love)", youtubeUrl: "https://www.youtube.com/watch?v=4NACMjwR5DE&list=RD4NACMjwR5DE&start_radio=1" },
    { title: "Poor Righteous Teachers - Rock Dis Funky Joint", youtubeUrl: "https://www.youtube.com/watch?v=gfMURCgM3GY&list=RDgfMURCgM3GY&start_radio=1" }
];


const songs1991 = [
    { title: "Geto Boys - Mind Playing Tricks on Me", youtubeUrl: "https://www.youtube.com/watch?v=IJtHdkyo0hc&list=RDIJtHdkyo0hc&start_radio=1" },
    { title: "A Tribe Called Quest - Check the Rhime", youtubeUrl: "https://www.youtube.com/watch?v=1QWEPdgS3As&list=RD1QWEPdgS3As&start_radio=1" },
    { title: "Naughty by Nature - O.P.P.", youtubeUrl: "https://www.youtube.com/watch?v=idx3GSL2KWs&list=RDidx3GSL2KWs&start_radio=1" },
    { title: "Public Enemy - Can't Truss It", youtubeUrl: "https://www.youtube.com/watch?v=am9BqZ6eA5c&list=RDam9BqZ6eA5c&start_radio=1" },
    { title: "Brand Nubian - Slow Down", youtubeUrl: "https://www.youtube.com/watch?v=asVzJUPvTsQ&list=RDasVzJUPvTsQ&start_radio=1" },
    { title: "Main Source - Live at the Barbeque", youtubeUrl: "https://www.youtube.com/watch?v=XmCWfJAPwbA&list=RDXmCWfJAPwbA&start_radio=1" },
    { title: "De La Soul - Ring Ring Ring (Ha Ha Hey)", youtubeUrl: "https://www.youtube.com/watch?v=hm6Kkje7bBM&list=RDhm6Kkje7bBM&start_radio=1" },
    { title: "3rd Bass - Pop Goes the Weasel", youtubeUrl: "https://www.youtube.com/watch?v=bgHAD5jPhYc&list=RDbgHAD5jPhYc&start_radio=1" },
    { title: "PMD feat. LL Cool J - Rampage", youtubeUrl: "https://www.youtube.com/watch?v=Aa0tMZi-K0o&list=RDAa0tMZi-K0o&start_radio=1" },
    { title: "MC Breed & DFC - Ain't No Future in Yo' Frontin", youtubeUrl: "https://www.youtube.com/watch?v=3QdrkqqJ5Sg&list=RD3QdrkqqJ5Sg&start_radio=1" }
];

const songs1992 = [
    { title: "Pete Rock & CL Smooth - They Reminisce Over You (T.R.O.Y.)", youtubeUrl: "https://www.youtube.com/watch?v=k6mdRv0ZdR8&list=RDk6mdRv0ZdR8&start_radio=1" },
    { title: "A Tribe Called Quest feat. Leaders of the New School - Scenario", youtubeUrl: "https://www.youtube.com/watch?v=Q6TLWqn82J4&list=RDQ6TLWqn82J4&start_radio=1" },
    { title: "Gang Starr feat. Nice & Smooth - DWYCK", youtubeUrl: "https://www.youtube.com/watch?v=TgelVkHEKdw&list=RDTgelVkHEKdw&start_radio=1" },
    { title: "Das EFX - They Want EFX", youtubeUrl: "https://www.youtube.com/watch?v=1PU22-fsGA0&list=RD1PU22-fsGA0&start_radio=1" },
    { title: "Nas - Halftime", youtubeUrl: "https://www.youtube.com/watch?v=HCDYgZM5yq0&list=RDHCDYgZM5yq0&start_radio=1" },
    { title: "Eric B. & Rakim - Know the Ledge", youtubeUrl: "https://www.youtube.com/watch?v=OPkWYTUiPTo&list=RDOPkWYTUiPTo&start_radio=1" },
    { title: "Black Sheep - The Choice Is Yours (Revisited)", youtubeUrl: "https://www.youtube.com/watch?v=K9F5xcpjDMU&list=RDK9F5xcpjDMU&start_radio=1" },
    { title: "EPMD - Crossover", youtubeUrl: "https://www.youtube.com/watch?v=DCcWkyg-6s0&list=RDDCcWkyg-6s0&start_radio=1" },
    { title: "Redman - Blow Your Mind", youtubeUrl: "https://www.youtube.com/watch?v=PpdMzy6kz3M&list=RDPpdMzy6kz3M&start_radio=1" },
    { title: "Arrested Development - People Everyday", youtubeUrl: "https://www.youtube.com/watch?v=a_4Y7Cei_bw&list=RDa_4Y7Cei_bw&start_radio=1" }
];

const songs1993 = [
    { title: "Wu-Tang Clan - Protect Ya Neck", youtubeUrl: "https://www.youtube.com/watch?v=R0IUR4gkPIE&list=RDR0IUR4gkPIE&start_radio=1" },
    { title: "Jeru the Damaja - Come Clean", youtubeUrl: "https://www.youtube.com/watch?v=aYYSlCa3xfw&list=RDaYYSlCa3xfw&start_radio=1" },
    { title: "A Tribe Called Quest - Award Tour", youtubeUrl: "https://www.youtube.com/watch?v=P800UWoE9xs&list=RDP800UWoE9xs&start_radio=1" },
    { title: "Redman - Tonight's da Night", youtubeUrl: "https://www.youtube.com/watch?v=KrGHujK8rmY&list=RDKrGHujK8rmY&start_radio=1" },
    { title: "Onyx - Throw Ya Gunz", youtubeUrl: "https://www.youtube.com/watch?v=mQmfzGf9904&list=RDmQmfzGf9904&start_radio=1" },
    { title: "KRS-One - Outta Here", youtubeUrl: "https://www.youtube.com/watch?v=Ex3XuJavaBI&list=RDEx3XuJavaBI&start_radio=1" },
    { title: "Lords of the Underground - Chief Rocka", youtubeUrl: "https://www.youtube.com/watch?v=JFQXtAE7SiU&list=RDJFQXtAE7SiU&start_radio=1" },
    { title: "Black Moon - Who Got da Props?", youtubeUrl: "https://www.youtube.com/watch?v=58lZYDxHRV8&list=RD58lZYDxHRV8&start_radio=1" },
    { title: "Scarface - Let Me Roll", youtubeUrl: "https://www.youtube.com/watch?v=QYye9adwNnA&list=RDQYye9adwNnA&start_radio=1" },
    { title: "MC Lyte - Ruffneck", youtubeUrl: "https://www.youtube.com/watch?v=NGbn6eaZmCY&list=RDNGbn6eaZmCY&start_radio=1" }
];

const songs1994 = [
    { title: "Nas - N.Y. State of Mind", youtubeUrl: "https://www.youtube.com/watch?v=hI8A14Qcv68&list=RDhI8A14Qcv68&start_radio=1" },
    { title: "The Notorious B.I.G. - Juicy", youtubeUrl: "https://www.youtube.com/watch?v=_JZom_gVfuw&list=RD_JZom_gVfuw&start_radio=1" },
    { title: "Wu-Tang Clan - C.R.E.A.M.", youtubeUrl: "https://www.youtube.com/watch?v=PBwAxmrE194&list=RDPBwAxmrE194&start_radio=1" },
    { title: "Gang Starr - Mass Appeal", youtubeUrl: "https://www.youtube.com/watch?v=y9lNbNGbo24&list=RDy9lNbNGbo24&start_radio=1" },
    { title: "Common - I Used to Love H.E.R.", youtubeUrl: "https://www.youtube.com/watch?v=TrUERC2Zk64&list=RDTrUERC2Zk64&start_radio=1" },
    { title: "OutKast - Player's Ball", youtubeUrl: "https://www.youtube.com/watch?v=vFofKGKlWo4&list=RDvFofKGKlWo4&start_radio=1" },
    { title: "O.C. - Time's Up", youtubeUrl: "https://www.youtube.com/watch?v=jneMQiw88B4&list=RDjneMQiw88B4&start_radio=1" },
    { title: "Craig Mack - Flava in Ya Ear", youtubeUrl: "https://www.youtube.com/watch?v=GNFqMx0gY7I&list=RDGNFqMx0gY7I&start_radio=1" },
    { title: "Scarface - I Seen a Man Die", youtubeUrl: "https://www.youtube.com/watch?v=RgyDpXkZfXE&list=RDRgyDpXkZfXE&start_radio=1" },
    { title: "Smif-N-Wessun - Bucktown", youtubeUrl: "https://www.youtube.com/watch?v=CwQSq5iZdpQ&list=RDCwQSq5iZdpQ&start_radio=1" }
];

const songs1995 = [
    { title: "Mobb Deep - Shook Ones, Pt. II", youtubeUrl: "https://www.youtube.com/watch?v=yoYZf-lBF_U&list=RDyoYZf-lBF_U&start_radio=1" },
    { title: "Goodie Mob - Cell Therapy", youtubeUrl: "https://www.youtube.com/watch?v=OGy4bmG5SJw&list=RDOGy4bmG5SJw&start_radio=1" },
    { title: "Raekwon - Incarcerated Scarfaces", youtubeUrl: "https://www.youtube.com/watch?v=1ZYau0hJHFk&list=RD1ZYau0hJHFk&start_radio=1" },
    { title: "Ol' Dirty Bastard - Brooklyn Zoo", youtubeUrl: "https://www.youtube.com/watch?v=GRblYfKwa88&list=RDGRblYfKwa88&start_radio=1" },
    { title: "The Notorious B.I.G. - Who Shot Ya?", youtubeUrl: "https://www.youtube.com/watch?v=U4Md8ZGtUN8&list=RDU4Md8ZGtUN8&start_radio=1" },
    { title: "KRS-One - MC's Act Like They Don't Know", youtubeUrl: "https://www.youtube.com/watch?v=xnI8JEW7Ty4&list=RDxnI8JEW7Ty4&start_radio=1" },
    { title: "Bone Thugs-N-Harmony - 1st of tha Month", youtubeUrl: "https://www.youtube.com/watch?v=4j_cOsgRY7w&list=RD4j_cOsgRY7w&start_radio=1" },
    { title: "Big L - Put It On", youtubeUrl: "https://www.youtube.com/watch?v=WWMjRMJ0dTI&list=RDWWMjRMJ0dTI&start_radio=1" },
    { title: "Showbiz & A.G. - Next Level (Nyte Time Mix)", youtubeUrl: "https://www.youtube.com/watch?v=QB3ZDNOy35o&list=RDQB3ZDNOy35o&start_radio=1" },
    { title: "Three 6 Mafia - Tear da Club Up", youtubeUrl: "https://www.youtube.com/watch?v=s0G9jPaZSKw&list=RDs0G9jPaZSKw&start_radio=1" }
];

const songs1996 = [
    { title: "OutKast - Elevators (Me & You)", youtubeUrl: "https://www.youtube.com/watch?v=uqB_UVlhlPA&list=RDuqB_UVlhlPA&start_radio=1" },
    { title: "Jay-Z - Dead Presidents II", youtubeUrl: "https://www.youtube.com/watch?v=jgwmy7iToIA&list=RDjgwmy7iToIA&start_radio=1" },
    { title: "Nas feat. Lauryn Hill - If I Ruled the World (Imagine That)", youtubeUrl: "https://www.youtube.com/watch?v=mlp-IIG9ApU&list=RDmlp-IIG9ApU&start_radio=1" },
    { title: "Fugees - Ready or Not", youtubeUrl: "https://www.youtube.com/watch?v=PWOa_eeKzO0&list=RDPWOa_eeKzO0&start_radio=1" },
    { title: "Ghostface Killah - Daytona 500", youtubeUrl: "https://www.youtube.com/watch?v=4fLAQDV4qfw&list=RD4fLAQDV4qfw&start_radio=1" },
    { title: "Mobb Deep - Hell on Earth (Front Lines)", youtubeUrl: "https://www.youtube.com/watch?v=-lonWMzBKdU&list=RD-lonWMzBKdU&start_radio=1" },
    { title: "De La Soul - Stakes Is High", youtubeUrl: "https://www.youtube.com/watch?v=radJQyaC5kY&list=RDradJQyaC5kY&start_radio=1" },
    { title: "The Roots - What They Do", youtubeUrl: "https://www.youtube.com/watch?v=_qzacv8dtb4&list=RD_qzacv8dtb4&start_radio=1" },
    { title: "Busta Rhymes - Woo Hah!! Got You All in Check", youtubeUrl: "https://www.youtube.com/watch?v=EQzvQO2LcA4&list=RDEQzvQO2LcA4&start_radio=1" },
    { title: "UGK - One Day", youtubeUrl: "https://www.youtube.com/watch?v=rCWH2MmlHQE&list=RDrCWH2MmlHQE&start_radio=1" }
];

const songs1997 = [
    { title: "The Notorious B.I.G. - Hypnotize", youtubeUrl: "https://www.youtube.com/watch?v=eaPzCHEQExs&list=RDeaPzCHEQExs&start_radio=1" },
    { title: "Wu-Tang Clan - Triumph", youtubeUrl: "https://www.youtube.com/watch?v=cPRKsKwEdUQ&list=RDcPRKsKwEdUQ&start_radio=1" },
    { title: "Missy Elliott - The Rain (Supa Dupa Fly)", youtubeUrl: "https://www.youtube.com/watch?v=hHcyJPTTn9w&list=RDhHcyJPTTn9w&start_radio=1" },
    { title: "Busta Rhymes - Put Your Hands Where My Eyes Could See", youtubeUrl: "https://www.youtube.com/watch?v=GSoQDaXh144&list=RDGSoQDaXh144&start_radio=1" },
    { title: "Gang Starr - You Know My Steez", youtubeUrl: "https://www.youtube.com/watch?v=r0DwBybR0L8&list=RDr0DwBybR0L8&start_radio=1" },
    { title: "Capone-N-Noreaga - T.O.N.Y. (Top of New York)", youtubeUrl: "https://www.youtube.com/watch?v=sk-RwpBIlfg&list=RDsk-RwpBIlfg&start_radio=1" },
    { title: "Scarface feat. 2Pac & Johnny P - Smile", youtubeUrl: "https://www.youtube.com/watch?v=dfxG9s0_ccM&list=RDdfxG9s0_ccM&start_radio=1" },
    { title: "KRS-One - Step Into a World (Rapture's Delight)", youtubeUrl: "https://www.youtube.com/watch?v=xbJxcFyaCpI&list=RDxbJxcFyaCpI&start_radio=1" },
    { title: "The Beatnuts feat. Big Pun & Cuban Link - Off the Books", youtubeUrl: "https://www.youtube.com/watch?v=M73ojCnSep8&list=RDM73ojCnSep8&start_radio=1" },
    { title: "Twista - Adrenaline Rush", youtubeUrl: "https://www.youtube.com/watch?v=Kbi8sYamOA0&list=RDKbi8sYamOA0&start_radio=1" }
];

const songs1998 = [
    { title: "DMX - Ruff Ryders' Anthem", youtubeUrl: "https://www.youtube.com/watch?v=ThlhSnRk21E&list=RDThlhSnRk21E&start_radio=1" },
    { title: "OutKast - Rosa Parks", youtubeUrl: "https://www.youtube.com/watch?v=drsQLEU0N1Y&list=RDdrsQLEU0N1Y&start_radio=1" },
    { title: "Big Pun feat. Joe - Still Not a Player", youtubeUrl: "https://www.youtube.com/watch?v=7Xue-dOOLiY&list=RD7Xue-dOOLiY&start_radio=1" },
    { title: "Jay-Z - Hard Knock Life (Ghetto Anthem)", youtubeUrl: "https://www.youtube.com/watch?v=lpZgKI97K1M&list=RDlpZgKI97K1M&start_radio=1" },
    { title: "Lauryn Hill - Doo Wop (That Thing)", youtubeUrl: "https://www.youtube.com/watch?v=T6QKqFPRZSA&list=RDT6QKqFPRZSA&start_radio=1" },
    { title: "Noreaga - Superthug", youtubeUrl: "https://www.youtube.com/watch?v=gs9ngd-uq6I&list=RDgs9ngd-uq6I&start_radio=1" },
    { title: "Juvenile - Ha", youtubeUrl: "https://www.youtube.com/watch?v=Ww9VlmXKYgs&list=RDWw9VlmXKYgs&start_radio=1" },
    { title: "Big L - Ebonics", youtubeUrl: "https://www.youtube.com/watch?v=f2tCrzXYP7U&list=RDf2tCrzXYP7U&start_radio=1" },
    { title: "Black Star - Definition", youtubeUrl: "https://www.youtube.com/watch?v=EuJaStSL0xM&list=RDEuJaStSL0xM&start_radio=1" },
    { title: "Gang Starr - Moment of Truth", youtubeUrl: "https://www.youtube.com/watch?v=Rr46FS7tkk4&list=RDRr46FS7tkk4&start_radio=1" }
];

const songs1999 = [
    { title: "Mos Def - Ms. Fat Booty", youtubeUrl: "https://www.youtube.com/watch?v=01yUzXQctcM&list=RD01yUzXQctcM&start_radio=1" },
    { title: "Pharoahe Monch - Simon Says", youtubeUrl: "https://www.youtube.com/watch?v=52PHX4m07aI&list=RD52PHX4m07aI&start_radio=1" },
    { title: "Nas - Nas Is Like", youtubeUrl: "https://www.youtube.com/watch?v=VC4ORS5n9Hg&list=RDVC4ORS5n9Hg&start_radio=1" },
    { title: "The Roots feat. Erykah Badu - You Got Me", youtubeUrl: "https://www.youtube.com/watch?v=MJCHeEQV454&list=RDMJCHeEQV454&start_radio=1" },
    { title: "Mobb Deep - Quiet Storm", youtubeUrl: "https://www.youtube.com/watch?v=splv6HpkIIM&list=RDsplv6HpkIIM&start_radio=1" },
    { title: "DMX - What's My Name?", youtubeUrl: "https://www.youtube.com/watch?v=4FFK5Oh10os&list=RD4FFK5Oh10os&start_radio=1" },
    { title: "Jay-Z feat. UGK - Big Pimpin'", youtubeUrl: "https://www.youtube.com/watch?v=Cgoqrgc_0cM&list=RDCgoqrgc_0cM&start_radio=1" },
    { title: "Method Man & Redman - Da Rockwilder", youtubeUrl: "https://www.youtube.com/watch?v=WCYy8jpp7R8&list=RDWCYy8jpp7R8&start_radio=1" },
    { title: "Juvenile feat. Mannie Fresh & Lil Wayne - Back That Azz Up", youtubeUrl: "https://www.youtube.com/watch?v=WpQrAbkM3dI&list=RDWpQrAbkM3dI&start_radio=1" },
    { title: "Common - The 6th Sense", youtubeUrl: "https://www.youtube.com/watch?v=KTGxPiEg7iM&list=RDKTGxPiEg7iM&start_radio=1" }
];

const westSongs1990 = [
    { title: "Ice Cube - AmeriKKKa's Most Wanted", youtubeUrl: "https://www.youtube.com/watch?v=8zK6eHWqjtw&list=RD8zK6eHWqjtw&start_radio=1" },
    { title: "Digital Underground - The Humpty Dance", youtubeUrl: "https://www.youtube.com/watch?v=PBsjggc5jHM&list=RDPBsjggc5jHM&start_radio=1" },
    { title: "Above the Law - Murder Rap", youtubeUrl: "https://www.youtube.com/watch?v=DQz6lvh9dKI&list=RDDQz6lvh9dKI&start_radio=1" },
    { title: "N.W.A - 100 Miles and Runnin'", youtubeUrl: "https://www.youtube.com/watch?v=GiDti_Xnnmo&list=RDGiDti_Xnnmo&start_radio=1" },
    { title: "Too $hort - The Ghetto", youtubeUrl: "https://www.youtube.com/watch?v=fw0uz88E2gI&list=RDfw0uz88E2gI&start_radio=1" },
    { title: "Kid Frost - La Raza", youtubeUrl: "https://www.youtube.com/watch?v=bZ8AS300WH4&list=RDbZ8AS300WH4&start_radio=1" },
    { title: "Compton's Most Wanted - One Time Gaffled 'Em Up", youtubeUrl: "https://www.youtube.com/watch?v=84mfSMz37qM&list=RD84mfSMz37qM&start_radio=1" },
    { title: "King Tee - At Your Own Risk", youtubeUrl: "https://www.youtube.com/watch?v=0pZKdIYr-UA&list=RD0pZKdIYr-UA&start_radio=1" },
    { title: "West Coast Rap All-Stars - We're All in the Same Gang", youtubeUrl: "https://www.youtube.com/watch?v=TCGI_R36oVc&list=RDTCGI_R36oVc&start_radio=1" },
    { title: "MC Hammer - U Can't Touch This", youtubeUrl: "https://www.youtube.com/watch?v=otCpCn0l4Wo&list=RDotCpCn0l4Wo&start_radio=1" },
];

const westSongs1991 = [
    { title: "Ice Cube - No Vaseline", youtubeUrl: "https://www.youtube.com/watch?v=rSK8jTzl1Kw&list=RDrSK8jTzl1Kw&start_radio=1" },
    { title: "Cypress Hill - How I Could Just Kill a Man", youtubeUrl: "https://www.youtube.com/watch?v=Yg-RIOATCbU&list=RDYg-RIOATCbU&start_radio=1" },
    { title: "N.W.A - Alwayz Into Somethin'", youtubeUrl: "https://www.youtube.com/watch?v=A0xHuA4jmgs&list=RDA0xHuA4jmgs&start_radio=1" },
    { title: "DJ Quik - Tonite", youtubeUrl: "https://www.youtube.com/watch?v=WWSLM2lFjvg&list=RDWWSLM2lFjvg&start_radio=1" },
    { title: "2Pac - Brenda's Got a Baby", youtubeUrl: "https://www.youtube.com/watch?v=NRWUs0KtB-I&list=RDNRWUs0KtB-I&start_radio=1" },
    { title: "Ice-T - O.G. Original Gangster", youtubeUrl: "https://www.youtube.com/watch?v=scILa5iPBcg&list=RDscILa5iPBcg&start_radio=1" },
    { title: "Del the Funky Homosapien - Mistadobalina", youtubeUrl: "https://www.youtube.com/watch?v=9Bku7gXlkoo&list=RD9Bku7gXlkoo&start_radio=1" },
    { title: "Compton's Most Wanted - Growin' Up in the Hood", youtubeUrl: "https://www.youtube.com/watch?v=VLnN6alrlXY&list=RDVLnN6alrlXY&start_radio=1" },
    { title: "Digital Underground - Kiss You Back", youtubeUrl: "https://www.youtube.com/watch?v=8Ihi-onGULs&list=RD8Ihi-onGULs&start_radio=1" },
    { title: "Yo-Yo - You Can't Play with My Yo-Yo", youtubeUrl: "https://www.youtube.com/watch?v=MZ-UEn11aDs&list=RDMZ-UEn11aDs&start_radio=1" },
];

const westSongs1992 = [
    { title: "Dr. Dre feat. Snoop Doggy Dogg - Nuthin' but a 'G' Thang", youtubeUrl: "https://www.youtube.com/watch?v=8GliyDgAGQI&list=RD8GliyDgAGQI&start_radio=1" },
    { title: "Ice Cube - It Was a Good Day", youtubeUrl: "https://www.youtube.com/watch?v=h4UqMyldS7Q&list=RDh4UqMyldS7Q&start_radio=1" },
    { title: "Dr. Dre feat. Snoop Doggy Dogg - Deep Cover", youtubeUrl: "https://www.youtube.com/watch?v=Op9Ml7pS6uA&list=RDOp9Ml7pS6uA&start_radio=1" },
    { title: "DJ Quik - Jus Lyke Compton", youtubeUrl: "https://www.youtube.com/watch?v=LaCyV8eiRm8&list=RDLaCyV8eiRm8&start_radio=1" },
    { title: "The Pharcyde - Ya Mama", youtubeUrl: "https://www.youtube.com/watch?v=lnCeZY6nxjQ&list=RDlnCeZY6nxjQ&start_radio=1" },
    { title: "Compton's Most Wanted - Hood Took Me Under", youtubeUrl: "https://www.youtube.com/watch?v=Rl2rCOFN43E&list=RDRl2rCOFN43E&start_radio=1" },
    { title: "Spice 1 - Welcome to the Ghetto", youtubeUrl: "https://www.youtube.com/watch?v=S8K31tTV554&list=RDS8K31tTV554&start_radio=1" },
    { title: "Too $hort - In the Trunk", youtubeUrl: "https://www.youtube.com/watch?v=CW3StylzxGo&list=RDCW3StylzxGo&start_radio=1" },
    { title: "Da Lench Mob - Guerillas in tha Mist", youtubeUrl: "https://www.youtube.com/watch?v=g9I9R-IMG20&list=RDg9I9R-IMG20&start_radio=1" },
    { title: "MC Ren - Final Frontier", youtubeUrl: "https://www.youtube.com/watch?v=7dOjVczHa7I&list=RD7dOjVczHa7I&start_radio=1" },
];

const westSongs1993 = [
    { title: "Snoop Doggy Dogg - Who Am I? (What's My Name?)", youtubeUrl: "https://www.youtube.com/watch?v=2soGJXQAQec&list=RD2soGJXQAQec&start_radio=1" },
    { title: "Souls of Mischief - 93 'til Infinity", youtubeUrl: "https://www.youtube.com/watch?v=fXJc2NYwHjw&list=RDfXJc2NYwHjw&start_radio=1" },
    { title: "Dr. Dre - Let Me Ride", youtubeUrl: "https://www.youtube.com/watch?v=UAMkKUG0-x8&list=RDUAMkKUG0-x8&start_radio=1" },
    { title: "2Pac - I Get Around", youtubeUrl: "https://www.youtube.com/watch?v=YqJAnQTwmJs&list=RDYqJAnQTwmJs&start_radio=1" },
    { title: "Cypress Hill - Insane in the Brain", youtubeUrl: "https://www.youtube.com/watch?v=RijB8wnJCN0&list=RDRijB8wnJCN0&start_radio=1" },
    { title: "Ice Cube - Check Yo Self (Remix)", youtubeUrl: "https://www.youtube.com/watch?v=bueFTrwHFEs&list=RDbueFTrwHFEs&start_radio=1" },
    { title: "Eazy-E - Real Muthaphuckkin G's", youtubeUrl: "https://www.youtube.com/watch?v=fJuapp9SORA&list=RDfJuapp9SORA&start_radio=1" },
    { title: "Spice 1 - Trigga Gots No Heart", youtubeUrl: "https://www.youtube.com/watch?v=EZZaVYVLbyo&list=RDEZZaVYVLbyo&start_radio=1" },
    { title: "Freestyle Fellowship - Inner City Boundaries", youtubeUrl: "https://www.youtube.com/watch?v=U6V2xYQH4yE&list=RDU6V2xYQH4yE&start_radio=1" },
    { title: "Too $hort - I'm a Player", youtubeUrl: "https://www.youtube.com/watch?v=WfeVI29oHp4&list=RDWfeVI29oHp4&start_radio=1" },
];

const westSongs1994 = [
    { title: "Warren G feat. Nate Dogg - Regulate", youtubeUrl: "https://www.youtube.com/watch?v=1plPyJdXKIY&list=RD1plPyJdXKIY&start_radio=1" },
    { title: "Snoop Doggy Dogg - Gin and Juice", youtubeUrl: "https://www.youtube.com/watch?v=fWCZse1iwE0&list=RDfWCZse1iwE0&start_radio=1" },
    { title: "2Pac - Pain", youtubeUrl: "https://www.youtube.com/watch?v=Xqa7guhUrRw&list=RDXqa7guhUrRw&start_radio=1" },
    { title: "Coolio - Fantastic Voyage", youtubeUrl: "https://www.youtube.com/watch?v=anFD_aYi5GQ&list=RDanFD_aYi5GQ&start_radio=1" },
    { title: "MC Eiht - All for the Money", youtubeUrl: "https://www.youtube.com/watch?v=nXmG7qIDshA&list=RDnXmG7qIDshA&start_radio=1" },
    { title: "Spice 1 - Strap on the Side", youtubeUrl: "https://www.youtube.com/watch?v=r19UnVBjETs&list=RDr19UnVBjETs&start_radio=1" },
    { title: "E-40 - Captain Save a Hoe", youtubeUrl: "https://www.youtube.com/watch?v=_7vQSPBtwyc&list=RD_7vQSPBtwyc&start_radio=1" },
    { title: "Tha Alkaholiks - Daaam!", youtubeUrl: "https://www.youtube.com/watch?v=Y6PKz_W5CRc&list=RDY6PKz_W5CRc&start_radio=1" },
    { title: "Ahmad - Back in the Day", youtubeUrl: "https://www.youtube.com/watch?v=Hsd4pWwIoSQ&list=RDHsd4pWwIoSQ&start_radio=1" },
    { title: "The Lady of Rage - Afro Puffs", youtubeUrl: "https://www.youtube.com/watch?v=OxpTzPx3H3Y&list=RDOxpTzPx3H3Y&start_radio=1" },
];

const westSongs1995 = [
    { title: "2Pac - Dear Mama", youtubeUrl: "https://www.youtube.com/watch?v=Mb1ZvUDvLDY&list=RDMb1ZvUDvLDY&start_radio=1" },
    { title: "Luniz - I Got 5 on It", youtubeUrl: "https://www.youtube.com/watch?v=me3CPl_i4C4&list=RDme3CPl_i4C4&start_radio=1" },
    { title: "E-40 feat. Suga-T - Sprinkle Me", youtubeUrl: "https://www.youtube.com/watch?v=byuQVTdlfos&list=RDbyuQVTdlfos&start_radio=1" },
    { title: "Tha Dogg Pound - Let's Play House", youtubeUrl: "https://www.youtube.com/watch?v=xn-IsIhJS1c&list=RDxn-IsIhJS1c&start_radio=1" },
    { title: "DJ Quik - Safe + Sound", youtubeUrl: "https://www.youtube.com/watch?v=Z6kky3k-MVk&list=RDZ6kky3k-MVk&start_radio=1" },
    { title: "The Pharcyde - Runnin'", youtubeUrl: "https://www.youtube.com/watch?v=jQ-RrGCSa2M&list=RDjQ-RrGCSa2M&start_radio=1" },
    { title: "Coolio feat. L.V. - Gangsta's Paradise", youtubeUrl: "https://www.youtube.com/watch?v=SQCSxqScSVQ&list=RDSQCSxqScSVQ&start_radio=1" },
    { title: "Skee-Lo - I Wish", youtubeUrl: "https://www.youtube.com/watch?v=ryDOy3AosBw&list=RDryDOy3AosBw&start_radio=1" },
    { title: "Tha Alkaholiks - Daaam!", youtubeUrl: "https://www.youtube.com/watch?v=XOB-gzpIDwc&list=RDXOB-gzpIDwc&start_radio=1" },
    { title: "Brotha Lynch Hung - Rest in Piss", youtubeUrl: "https://www.youtube.com/watch?v=4w22oYdgU2Y&list=RD4w22oYdgU2Y&start_radio=1" },
];

const westSongs1996 = [
    { title: "2Pac feat. Dr. Dre - California Love", youtubeUrl: "https://www.youtube.com/watch?v=omfz62qu_Bc&list=RDomfz62qu_Bc&start_radio=1" },
    { title: "Westside Connection - Bow Down", youtubeUrl: "https://www.youtube.com/watch?v=mGX1ZeulVx8&list=RDmGX1ZeulVx8&start_radio=1" },
    { title: "Xzibit - Paparazzi", youtubeUrl: "https://www.youtube.com/watch?v=g5xJBKVGTGs&list=RDg5xJBKVGTGs&start_radio=1" },
    { title: "E-40 feat. Too $hort & K-Ci - Rapper's Ball", youtubeUrl: "https://www.youtube.com/watch?v=aqkxWMxaBOU&list=RDaqkxWMxaBOU&start_radio=1" },
    { title: "Too $hort feat. Erick Sermon - Buy You Some", youtubeUrl: "https://www.youtube.com/watch?v=xzDXxSG2syQ&list=RDxzDXxSG2syQ&start_radio=1" },
    { title: "as Kass - Nature of the Threat", youtubeUrl: "https://www.youtube.com/watch?v=DrC_m2rfJX4&list=RDDrC_m2rfJX4&start_radio=1" },
    { title: "Snoop Doggy Dogg - Snoop's Upside Ya Head", youtubeUrl: "https://www.youtube.com/watch?v=WVHyg8iug5c&list=RDWVHyg8iug5c&start_radio=1" },
    { title: "Tha Dogg Pound feat. Snoop Doggy Dogg - New York, New York", youtubeUrl: "https://www.youtube.com/watch?v=fskQ3sqorys&list=RDfskQ3sqorys&start_radio=1" },
    { title: "Dr. Octagon - Blue Flowers", youtubeUrl: "https://www.youtube.com/watch?v=V9VYzNUXGDA&list=RDV9VYzNUXGDA&start_radio=1" },
    { title: "Mac Mall - Get Right", youtubeUrl: "https://www.youtube.com/watch?v=goKwh5_yS5s&list=RDgoKwh5_yS5s&start_radio=1" },
];

const westSongs1997 = [
    { title: "title", youtubeUrl: "youtube" },
    { title: "title", youtubeUrl: "youtube" },
    { title: "title", youtubeUrl: "youtube" },
    { title: "title", youtubeUrl: "youtube" },
    { title: "title", youtubeUrl: "youtube" },
    { title: "title", youtubeUrl: "youtube" },
    { title: "title", youtubeUrl: "youtube" },
    { title: "title", youtubeUrl: "youtube" },
    { title: "title", youtubeUrl: "youtube" },
    { title: "title", youtubeUrl: "youtube" },
];

const westSongs1998 = [
    { title: "title", youtubeUrl: "youtube" },
    { title: "title", youtubeUrl: "youtube" },
    { title: "title", youtubeUrl: "youtube" },
    { title: "title", youtubeUrl: "youtube" },
    { title: "title", youtubeUrl: "youtube" },
    { title: "title", youtubeUrl: "youtube" },
    { title: "title", youtubeUrl: "youtube" },
    { title: "title", youtubeUrl: "youtube" },
    { title: "title", youtubeUrl: "youtube" },
    { title: "title", youtubeUrl: "youtube" },
];

const westSongs1999 = [
    { title: "title", youtubeUrl: "youtube" },
    { title: "title", youtubeUrl: "youtube" },
    { title: "title", youtubeUrl: "youtube" },
    { title: "title", youtubeUrl: "youtube" },
    { title: "title", youtubeUrl: "youtube" },
    { title: "title", youtubeUrl: "youtube" },
    { title: "title", youtubeUrl: "youtube" },
    { title: "title", youtubeUrl: "youtube" },
    { title: "title", youtubeUrl: "youtube" },
    { title: "title", youtubeUrl: "youtube" },
];
function showRanking(year, songs) {
    ranking.innerHTML = `
        <h2>${year} TOP 10</h2>
    `;

    for (let i = 0; i < songs.length; i++) {
        ranking.innerHTML += `
            <p>
                ${i + 1}.
                <a href="${songs[i].youtubeUrl}" target="_blank">
                    ${songs[i].title}
                </a>
            </p>
        `;
    }
}

function removeActive() {
    yearButtons.forEach(function (button) {
        button.classList.remove("active");
    });
}

const button1990 = document.getElementById("year-1990");
const button1991 = document.getElementById("year-1991");
const button1992 = document.getElementById("year-1992");
const button1993 = document.getElementById("year-1993");
const button1994 = document.getElementById("year-1994");
const button1995 = document.getElementById("year-1995");
const button1996 = document.getElementById("year-1996");
const button1997 = document.getElementById("year-1997");
const button1998 = document.getElementById("year-1998");
const button1999 = document.getElementById("year-1999");
const yearButtons = document.querySelectorAll(".years button");
console.log(yearButtons);
const player = document.getElementById("player");

console.log(player);

console.log(button1990);

yearButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        removeActive();
        button.classList.add("active");
    });
});

button1990.addEventListener("click", function () {
    if (document.body.id === "west-page") {
        showRanking(1990, westSongs1990);
    } else {
        showRanking(1990, songs1990);
    }
});

button1991.addEventListener("click", function () {
    if (document.body.id === "west-page") {
        showRanking(1991, westSongs1991);
    } else {
        showRanking(1991, songs1991);
    }
});

button1992.addEventListener("click", function () {
    if (document.body.id === "west-page") {
        showRanking(1992, westSongs1992);
    } else {
        showRanking(1992, songs1992);
    }
});

button1993.addEventListener("click", function () {
    if (document.body.id === "west-page") {
        showRanking(1993, westSongs1993);
    } else {
        showRanking(1993, songs1993);
    }
});

button1994.addEventListener("click", function () {
    if (document.body.id === "west-page") {
        showRanking(1994, westSongs1994);
    } else {
        showRanking(1994, songs1994);
    }
});

button1995.addEventListener("click", function () {
    if (document.body.id === "west-page") {
        showRanking(1995, westSongs1995);
    } else {
        showRanking(1995, songs1995);
    }
});

button1996.addEventListener("click", function () {
    if (document.body.id === "west-page") {
        showRanking(1996, westSongs1996);
    } else {
        showRanking(1996, songs1996);
    }       
});

button1997.addEventListener("click", function () {
    if (document.body.id === "west-page") {
        showRanking(1997, westSongs1997);
    } else {
        showRanking(1997, songs1997);
    }
});

button1998.addEventListener("click", function () {
    if (document.body.id === "west-page") {
        showRanking(1998, westSongs1998);
    } else {
        showRanking(1998, songs1998);
    }
});

button1999.addEventListener("click", function () {
    if (document.body.id === "west-page") {
        showRanking(1999, westSongs1999);
    } else {
        showRanking(1999, songs1999);
    }
});