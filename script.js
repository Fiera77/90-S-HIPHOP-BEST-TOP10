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
    { title: "title", youtubeUrl: "youtube" },
    { title: "title", youtubeUrl: "youtube" },
    { title: "title", youtubeUrl: "youtube" },
    { title: "title", youtubeUrl: "youtube" },
    { title: "title", youtubeUrl: "youtube" },
    { title: "title", youtubeUrl: "youtube" },
    { title: "title", youtubeUrl: "youtube" },
    { title: "title", youtubeUrl: "youtube" },
];

const westSongs1991 = [
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

const westSongs1992 = [
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

const westSongs1993 = [
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

const westSongs1994 = [
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

const westSongs1995 = [
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

const westSongs1996 = [
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