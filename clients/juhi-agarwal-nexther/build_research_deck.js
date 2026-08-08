const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE";
pres.author = "Production X Creative Studio";
pres.title = "neXtHer — What I Found";

const PLUM="3D1B2E", BERRY="6D2E46", ROSE="A26769", GOLD="D9A441", WHITE="FFFFFF",
      TINT="F7F2F4", INK="2B1620", MUTED="7A6068", MUTEDD="C9AEB8",
      GREENBG="F1F6F2", GREEN="4A7C59";
const HF="Cambria", BF="Calibri";
const M=0.78, W=13.3-M*2;
const LOGO_DARK=__dirname+"/logo/logo-on-dark.png";

const dark=()=>{const s=pres.addSlide();s.background={color:PLUM};return s;};
const light=()=>{const s=pres.addSlide();s.background={color:WHITE};return s;};
const eyebrow=(s,t,d)=>s.addText(t.toUpperCase(),{x:M,y:0.46,w:W,h:0.3,margin:0,
  fontFace:BF,fontSize:12,bold:true,charSpacing:2.2,color:d?GOLD:ROSE});
const title=(s,t,d,o)=>{o=o||{};s.addText(t,{x:M,y:o.y||0.84,w:o.w||W,h:o.h||1.05,margin:0,
  fontFace:HF,fontSize:o.size||39,bold:true,color:d?WHITE:INK,lineSpacing:45});};
const card=(s,x,y,w,h,f)=>s.addShape(pres.ShapeType.roundRect,{x,y,w,h,fill:{color:f},rectRadius:0.14});
function badge(s,x,y,l,f,tc,d){d=d||0.55;
  s.addShape(pres.ShapeType.ellipse,{x,y,w:d,h:d,fill:{color:f}});
  s.addText(l,{x,y,w:d,h:d,margin:0,fontFace:BF,fontSize:d>0.5?15:13,bold:true,color:tc,align:"center",valign:"middle"});}
const note=(s,y,t,w)=>s.addText(t,{x:M,y,w:w||W,h:0.7,margin:0,
  fontFace:HF,fontSize:17,italic:true,color:GOLD,lineSpacing:24});
const foot=(s,t,d)=>s.addText(t,{x:M,y:6.9,w:W,h:0.35,margin:0,
  fontFace:BF,fontSize:10.5,italic:true,color:d?MUTEDD:MUTED});
const bl=(s,items,o)=>s.addText(items.map((t,i)=>({text:t,options:{bullet:true,breakLine:i!==items.length-1}})),
  Object.assign({margin:0,fontFace:BF,fontSize:13.5,color:INK,paraSpaceAfter:8,lineSpacing:20},o));

/* 1 COVER */{const s=dark();
  s.addShape(pres.ShapeType.ellipse,{x:9.6,y:-1.8,w:6.0,h:6.0,fill:{color:BERRY}});
  s.addShape(pres.ShapeType.ellipse,{x:11.6,y:4.7,w:3.2,h:3.2,fill:{color:ROSE},transparency:65});
  s.addImage({path:LOGO_DARK,x:M,y:0.6,w:3.3,h:0.78});
  s.addText("FOR JUHI AGARWAL  ·  AUGUST 2026",{x:M,y:2.55,w:8,h:0.3,margin:0,fontFace:BF,fontSize:12,bold:true,charSpacing:2.2,color:GOLD});
  s.addText("neXtHer",{x:M,y:2.92,w:8,h:0.9,margin:0,fontFace:HF,fontSize:64,bold:true,color:WHITE});
  s.addText("What I found",{x:M,y:3.86,w:8,h:0.6,margin:0,fontFace:HF,fontSize:34,color:GOLD});
  s.addText("You asked me to film, edit, publish and grow. Before I answered that, I wanted to understand what I'd be filming — and what would actually make it work.",
    {x:M,y:4.7,w:7.0,h:1.1,margin:0,fontFace:BF,fontSize:17,color:MUTEDD,lineSpacing:26});
  s.addText("Kiran  ·  Production X Creative Studio",{x:M,y:6.35,w:7,h:0.3,margin:0,fontFace:BF,fontSize:14,color:MUTEDD});}

/* 2 HER WORDS */{const s=light(); eyebrow(s,"Where we started"); title(s,"Your words, first");
  card(s,M,2.05,W,1.9,TINT);
  s.addText("\"I'm building a personal brand focused on helping women (especially mothers) use AI, mindset, and practical systems to create more freedom and financial independence.\n\nI'm looking for a digital production partner who can help me film, edit, publish, and grow high quality content as we build the brand together.\"",
    {x:M+0.55,y:2.05,w:W-1.1,h:1.9,margin:0,fontFace:HF,fontSize:15.5,italic:true,color:BERRY,valign:"middle",lineSpacing:23});
  s.addText("Most people would reply to that with a package and a price.",{x:M,y:4.5,w:11,h:0.5,margin:0,fontFace:BF,fontSize:18,color:INK});
  s.addText("I'd rather understand the brand before I offer to build it.",{x:M,y:5.1,w:11,h:0.5,margin:0,fontFace:BF,fontSize:20,bold:true,color:BERRY});
  note(s,6.0,"So I spent a week going through everything. This is what I found.");}

/* 3 THE WORKING */{const s=light(); eyebrow(s,"Before anything else"); title(s,"What I actually went through");
  s.addText("YOUR SIDE",{x:M,y:2.0,w:5.6,h:0.3,margin:0,fontFace:BF,fontSize:13,bold:true,charSpacing:1.4,color:BERRY});
  bl(s,["All 34 posts — every cover, every hook","Every caption, read in full",
    "Your Stories, including the growth poll and the laptop teaser",
    "Your Threads account — every post and every reply",
    "Your bio, CTA, highlights and posting rhythm"],{x:M,y:2.42,w:5.4,h:2.3,fontSize:14.5});
  s.addText("THE TWO YOU SENT ME",{x:7.1,y:2.0,w:5.4,h:0.3,margin:0,fontFace:BF,fontSize:13,bold:true,charSpacing:1.4,color:BERRY});
  bl(s,["@upgradingkatie — 369 posts, her pinned trio, her comment sections, her manifesto",
    "@melrobbins — grid, guest structure, quote-card system"],{x:7.1,y:2.42,w:5.2,h:1.1,fontSize:14.5});
  s.addText("THE MARKET",{x:7.1,y:3.72,w:5.4,h:0.3,margin:0,fontFace:BF,fontSize:13,bold:true,charSpacing:1.4,color:BERRY});
  bl(s,["AI education, mom content and women's finance in India","What Indian audiences actually pay for"],
    {x:7.1,y:4.14,w:5.2,h:0.9,fontSize:14.5});
  card(s,M,5.7,W,0.92,BERRY);
  s.addText([{text:"Roughly ",options:{color:WHITE}},{text:"20 hours",options:{color:GOLD,bold:true}},
    {text:". I wanted to bring you something you hadn't already thought of.",options:{color:WHITE}}],
    {x:M+0.5,y:5.7,w:W-1.0,h:0.92,margin:0,fontFace:BF,fontSize:17,valign:"middle"});}

/* 4 WHERE YOU ARE */{const s=light(); eyebrow(s,"Starting point"); title(s,"You're doing more right than you think");
  [["34","posts published"],["1,209","followers"],["1","story highlight"],["0","pinned posts"]]
    .forEach((v,i)=>{const x=M+i*2.5; card(s,x,2.0,2.22,1.32,TINT);
      s.addText(v[0],{x:x+0.3,y:2.2,w:1.7,h:0.6,margin:0,fontFace:HF,fontSize:34,bold:true,color:BERRY});
      s.addText(v[1],{x:x+0.3,y:2.82,w:1.75,h:0.4,margin:0,fontFace:BF,fontSize:12,color:MUTED});});
  ["You post consistently. Most people quit long before 34.",
   "You write well. Your captions are the best thing on the account.",
   "You're at ease on camera. That's rarer than you'd think.",
   "You found Katie yourself. You can read a market.",
   "You're already networking — I saw your Threads replies.",
   "You test formats. The slider poll was a good instinct."]
   .forEach((t,i)=>{const c=i%2,r=Math.floor(i/2);
     s.addText([{text:"✓   ",options:{color:GREEN,bold:true}},{text:t,options:{color:INK}}],
       {x:M+c*6.0,y:3.9+r*0.66,w:5.7,h:0.55,margin:0,fontFace:BF,fontSize:15,lineSpacing:21});});
  note(s,6.15,"The problem isn't effort. It's that the effort is going in five directions at once.");}

/* 5 FIVE SURFACES */{const s=light(); eyebrow(s,"Pattern 01"); title(s,"Five places you show up. Five different Juhis.");
  const rows=[["Your bio","Overcome burnout · Mindset · Healing · Confidence"],
    ["All 34 posts","Save your marriage"],
    ["Your Stories","Growth quotes, in a completely different visual style"],
    ["Your Threads","Healing + productivity + accountability"],
    ["neXtHer — the real one","AI, systems, income, independence"]];
  let y=2.05;
  rows.forEach((r,i)=>{const last=i===rows.length-1;
    s.addShape(pres.ShapeType.roundRect,{x:M,y,w:W,h:0.66,fill:{color:last?BERRY:TINT},rectRadius:0.1});
    s.addText(r[0],{x:M+0.34,y,w:2.5,h:0.66,margin:0,fontFace:BF,fontSize:13,bold:true,color:last?MUTEDD:MUTED,valign:"middle"});
    s.addText(r[1],{x:M+2.95,y,w:W-3.3,h:0.66,margin:0,fontFace:BF,fontSize:15.5,color:last?WHITE:INK,valign:"middle"});
    y+=0.77;});
  s.addText("A new visitor has to guess which one you are. Instagram has to guess too — and it guesses from what you post, not from your bio.",
    {x:M,y:6.15,w:W,h:0.6,margin:0,fontFace:BF,fontSize:15.5,bold:true,color:BERRY,lineSpacing:22});}

/* 6 HER LINE */{const s=light(); eyebrow(s,"Pattern 02 · my favourite thing I found");
  title(s,"You've already written your best line");
  s.addText("You wrote this on Threads, in a reply, to a stranger:",{x:M,y:1.9,w:W,h:0.3,margin:0,fontFace:BF,fontSize:15,color:MUTED});
  card(s,M,2.32,W,1.72,BERRY);
  s.addText([{text:"\"I work with women who want to get ",options:{color:WHITE}},
    {text:"hotter, richer, more energized and more loved",options:{color:GOLD,bold:true}},
    {text:".\"",options:{color:WHITE}}],
    {x:M+0.55,y:2.32,w:W-1.1,h:1.72,margin:0,fontFace:HF,fontSize:26,italic:true,valign:"middle",lineSpacing:36});
  s.addText("And this is your Instagram bio:",{x:M,y:4.42,w:W,h:0.3,margin:0,fontFace:BF,fontSize:15,color:MUTED});
  card(s,M,4.82,W,0.86,TINT);
  s.addText("\"Helping Ambitious Women Overcome Burnout\"",
    {x:M+0.55,y:4.82,w:W-1.1,h:0.86,margin:0,fontFace:HF,fontSize:19,italic:true,color:MUTED,valign:"middle"});
  note(s,6.1,"The first one is yours. You wrote it without thinking. It's sitting on an account with 3 followers.");}

/* 7 CAPTION VS VIDEO */{const s=light(); eyebrow(s,"Pattern 03");
  title(s,"Your best writing is where the algorithm can't see it",false,{size:33});
  card(s,M,2.1,5.65,2.25,TINT);
  s.addText("ON THE VIDEO",{x:M+0.4,y:2.36,w:4.9,h:0.3,margin:0,fontFace:BF,fontSize:13,bold:true,charSpacing:1.4,color:BERRY});
  s.addText("A title card over b-roll of you walking. Then two words:  \"Read caption.\"",
    {x:M+0.4,y:2.78,w:4.9,h:1.3,margin:0,fontFace:HF,fontSize:20,color:INK,lineSpacing:29});
  card(s,6.87,2.1,5.65,2.25,ROSE);
  s.addText("IN THE CAPTION",{x:7.27,y:2.36,w:4.9,h:0.3,margin:0,fontFace:BF,fontSize:13,bold:true,charSpacing:1.4,color:WHITE});
  s.addText("Four sentences that damage a relationship. Five habits that quietly destroy one. Structured, genuinely useful writing — often 300 words of it.",
    {x:7.27,y:2.78,w:4.9,h:1.3,margin:0,fontFace:BF,fontSize:15,color:WHITE,lineSpacing:22});
  s.addText("Instagram ranks a reel on how long people watch the video. It can't read a caption. So your strongest work sits in the one place the platform doesn't count.",
    {x:M,y:4.95,w:11.4,h:0.9,margin:0,fontFace:BF,fontSize:17.5,color:INK,lineSpacing:26});
  note(s,6.15,"The fix isn't writing less. It's saying it out loud, in the first five seconds.");}

/* 8 NO VOICE */{const s=dark();
  s.addShape(pres.ShapeType.ellipse,{x:10.2,y:1.3,w:4.4,h:4.4,fill:{color:BERRY}});
  eyebrow(s,"Pattern 04",true);
  s.addText("34",{x:M,y:1.7,w:4,h:1.45,margin:0,fontFace:HF,fontSize:108,bold:true,color:GOLD});
  s.addText("posts, and we still haven't heard your voice",{x:M,y:3.1,w:7,h:0.4,margin:0,fontFace:BF,fontSize:18,color:MUTEDD});
  s.addText("No talking-head. Not once.",{x:M,y:4.0,w:8.4,h:0.7,margin:0,fontFace:HF,fontSize:36,bold:true,color:WHITE});
  s.addText([{text:"People buy a coach for ",options:{color:MUTEDD}},
    {text:"how she thinks",options:{color:WHITE,bold:true}},
    {text:" — the judgement, the warmth, the way she says a hard thing kindly. None of that has been heard yet.",options:{color:MUTEDD}}],
    {x:M,y:4.95,w:8.4,h:1.0,margin:0,fontFace:BF,fontSize:17,lineSpacing:26});
  note(s,6.3,"This is the cheapest fix on this list. It costs nothing but the decision.",8.4);}

/* 9 ALREADY STARTED */{const s=light(); eyebrow(s,"Pattern 05"); title(s,"You've already started — quietly");
  s.addText("One of your Stories, over a photo of your laptop:",{x:M,y:2.0,w:W,h:0.3,margin:0,fontFace:BF,fontSize:15,color:MUTED});
  card(s,M,2.42,W,1.4,TINT);
  s.addText("\"Building something crazy for all my girlies ❤️ SO EXCITED\"",
    {x:M+0.55,y:2.42,w:W-1.1,h:1.4,margin:0,fontFace:HF,fontSize:29,bold:true,color:BERRY,valign:"middle"});
  s.addText("You're already announcing neXtHer. You're already excited about it. It just went somewhere that disappeared after 24 hours.",
    {x:M,y:4.3,w:11.4,h:0.8,margin:0,fontFace:BF,fontSize:17.5,color:INK,lineSpacing:26});
  card(s,M,5.3,W,1.18,BERRY);
  s.addText("The direction is already decided in your head. What's missing is someone to help you commit to it publicly — and keep it going every single week.",
    {x:M+0.5,y:5.3,w:W-1.0,h:1.18,margin:0,fontFace:BF,fontSize:18,color:WHITE,valign:"middle",lineSpacing:25});}

/* 10 SWOT */{const s=light(); eyebrow(s,"The honest picture"); title(s,"SWOT");
  [["STRENGTHS",GREEN,GREENBG,M,1.9,["100+ women coached — real experience behind you",
      "You understand the emotional life of Indian married women better than any AI educator here",
      "Consistent publisher, strong writer, easy on camera",
      "You're 30 with two kids — you are your audience"]],
   ["WEAKNESSES",BERRY,TINT,7.05,1.9,["Five identities across five surfaces",
      "1,209 followers built on marriage content — not the people who'd buy neXtHer",
      "No voice on camera, no funnel, no list you own",
      "Nothing pinned — a first-time visitor has no way in"]],
   ["OPPORTUNITIES",GREEN,GREENBG,M,4.5,["The exact model is proven — 415K, in the US",
      "Nobody in India is doing it in Hinglish for mothers. I looked",
      "Your relationship work is a moat, not baggage — it's why women trust you",
      "YouTube demand for \"how to use ChatGPT to…\" is wide open in Hindi"]],
   ["THREATS",BERRY,TINT,7.05,4.5,["The window. This format is ~12 months old. Someone will take this lane in India",
      "The \"AI income\" category has bad neighbours — we have to look obviously different",
      "Attention split across several ventures at once",
      "Doing everything alone is how good creators stop posting"]]]
  .forEach(([hd,hc,bg,x,y,items])=>{const w=x===M?5.7:5.67;
    card(s,x,y,w,2.4,bg);
    s.addText(hd,{x:x+0.32,y:y+0.2,w:5.0,h:0.28,margin:0,fontFace:BF,fontSize:12.5,bold:true,charSpacing:1.6,color:hc});
    bl(s,items,{x:x+0.32,y:y+0.58,w:w-0.64,h:1.7,fontSize:12,paraSpaceAfter:5,lineSpacing:17});});
  foot(s,"Based on your published content, your Threads activity, and market research across AI education, mom content and women's finance in India.");}

/* 11 KATIE */{const s=light(); eyebrow(s,"The account you sent me"); title(s,"Katie is you, about twelve months ahead");
  card(s,M,2.05,5.75,2.62,PLUM);
  s.addText("@UPGRADINGKATIE",{x:M+0.42,y:2.38,w:5.0,h:0.3,margin:0,fontFace:BF,fontSize:12.5,bold:true,charSpacing:1.6,color:GOLD});
  s.addText("415,000",{x:M+0.42,y:2.82,w:5.0,h:0.72,margin:0,fontFace:HF,fontSize:44,bold:true,color:GOLD});
  s.addText("followers · 369 posts · about a year",{x:M+0.42,y:3.54,w:5.0,h:0.3,margin:0,fontFace:BF,fontSize:14,color:MUTEDD});
  s.addText("Bio: \"Mom routines · money · glowup\"",{x:M+0.42,y:4.0,w:5.0,h:0.35,margin:0,fontFace:BF,fontSize:14,italic:true,color:WHITE});
  card(s,7.05,2.05,5.67,2.62,TINT);
  s.addText("SHE IS",{x:7.47,y:2.38,w:4.8,h:0.3,margin:0,fontFace:BF,fontSize:12.5,bold:true,charSpacing:1.6,color:BERRY});
  bl(s,["32 years old, two young children","Filming on her phone, in her kitchen and her car",
    "Teaching mothers to use AI for their life and their income"],{x:7.47,y:2.8,w:4.8,h:1.2,fontSize:14.5});
  s.addText("You're 30. Two kids. Same idea.",{x:7.47,y:4.12,w:4.8,h:0.35,margin:0,fontFace:BF,fontSize:15.5,bold:true,color:BERRY});
  card(s,M,5.05,W,1.1,BERRY);
  s.addText("You aren't betting on an untested idea. Someone with your life, your age and your audience already made it work.",
    {x:M+0.5,y:5.05,w:W-1.0,h:1.1,margin:0,fontFace:BF,fontSize:18,color:WHITE,valign:"middle",lineSpacing:25});
  note(s,6.35,"The difference between you and her right now is 335 posts and one clear decision.");}

/* 12 KATIE MECHANICS */{const s=light(); eyebrow(s,"What she actually does"); title(s,"Six things Katie does that you don't — yet");
  [["She documents. She doesn't teach.","\"86 days of small boring tasks.\" People return for the next episode, not the next tip."],
   ["Monthly challenges with public rules","She never runs out of things to post, because the format generates them."],
   ["She shows what she earns","\"How much I made in June.\" Proof beats promises, every time."],
   ["She de-influences","\"No cleaning lady. Car from 2004. This is normal.\" It's why she's trusted."],
   ["Everything is selfie camera","No crew, no lighting. She looks like the woman watching. That's the point."],
   ["Her comments ask for the prompt","She shows the result and holds back the method. The audience runs the funnel."]]
  .forEach((it,i)=>{const c=i%2,r=Math.floor(i/2),x=M+c*6.15,y=2.0+r*1.18;
    badge(s,x,y,String(i+1),BERRY,WHITE,0.46);
    s.addText(it[0],{x:x+0.66,y:y-0.04,w:5.2,h:0.32,margin:0,fontFace:BF,fontSize:15.5,bold:true,color:INK});
    s.addText(it[1],{x:x+0.66,y:y+0.32,w:5.2,h:0.65,margin:0,fontFace:BF,fontSize:13,color:MUTED,lineSpacing:18});});
  card(s,M,5.75,W,1.15,TINT);
  s.addText("And one rule from her pinned post I keep thinking about:",{x:M+0.5,y:5.88,w:W-1.0,h:0.3,margin:0,fontFace:BF,fontSize:14,color:MUTED});
  s.addText("\"I use AI to upgrade my life. I never use AI to write my content.\"",
    {x:M+0.5,y:6.2,w:W-1.0,h:0.5,margin:0,fontFace:HF,fontSize:22,bold:true,color:BERRY});}

/* 13 MEL */{const s=light(); eyebrow(s,"The other account you sent me"); title(s,"Mel Robbins is the destination, not the map");
  s.addText("Behind her Instagram sits the #1 selling book of 2025, a top-tier podcast, a live tour and twenty years of work. The account is the result of that authority, not the thing that built it. Copying the format today would give us beautiful posts nobody shares.",
    {x:M,y:2.05,w:11.4,h:1.2,margin:0,fontFace:BF,fontSize:17.5,color:INK,lineSpacing:26});
  s.addText("But one thing of hers transfers, and it may be the most valuable idea in this deck:",
    {x:M,y:3.45,w:W,h:0.35,margin:0,fontFace:BF,fontSize:15,color:MUTED});
  card(s,M,3.95,W,1.9,PLUM);
  s.addText([{text:"Her whole career rests on ",options:{color:WHITE}},{text:"naming a mechanism.",options:{color:GOLD}}],
    {x:M+0.5,y:4.2,w:W-1.0,h:0.5,margin:0,fontFace:HF,fontSize:28,bold:true});
  s.addText("The 5 Second Rule. The Let Them Theory. Not advice — a named, repeatable thing people describe to each other when she isn't in the room.",
    {x:M+0.5,y:4.85,w:W-1.0,h:0.8,margin:0,fontFace:BF,fontSize:16,color:MUTEDD,lineSpacing:23});
  note(s,6.15,"neXtHer needs one of those. Building it is the first thing I'd want to do with you.");}

/* 14 THE GAP */{const s=light(); eyebrow(s,"The opening");
  title(s,"Nobody in India is standing where you could stand",false,{size:34});
  const rows=[["AI education in India","Speaks to men, students and job-seekers. English, technical, career-shaped."],
    ["Mom content in India","Parenting, lifestyle, product hauls. Nothing about her earning."],
    ["Women & money in India","How to invest money you already have. Not how to make your own."]];
  let y=2.05;
  rows.forEach(r=>{s.addShape(pres.ShapeType.roundRect,{x:M,y,w:W,h:0.8,fill:{color:TINT},rectRadius:0.1});
    s.addText(r[0],{x:M+0.34,y,w:3.2,h:0.8,margin:0,fontFace:BF,fontSize:15,bold:true,color:INK,valign:"middle"});
    s.addText(r[1],{x:M+3.6,y,w:W-3.95,h:0.8,margin:0,fontFace:BF,fontSize:15,color:MUTED,valign:"middle"});
    y+=0.93;});
  s.addShape(pres.ShapeType.roundRect,{x:M,y,w:W,h:0.98,fill:{color:BERRY},rectRadius:0.1});
  s.addText("The empty space",{x:M+0.34,y,w:3.2,h:0.98,margin:0,fontFace:BF,fontSize:15,bold:true,color:GOLD,valign:"middle"});
  s.addText("An Indian mother teaching other Indian mothers to earn with AI — in Hinglish, with in-laws and school runs in the picture.",
    {x:M+3.6,y,w:W-4.0,h:0.98,margin:0,fontFace:BF,fontSize:16,color:WHITE,valign:"middle",lineSpacing:22});
  s.addText([{text:"I searched for someone already doing this. ",options:{color:INK}},
    {text:"I couldn't find her.",options:{color:INK,bold:true}},
    {text:" That won't be true in a year.",options:{color:INK}}],
    {x:M,y:6.35,w:11.4,h:0.5,margin:0,fontFace:BF,fontSize:17});}

/* 15 WHAT WE SHOOT */{const s=light(); eyebrow(s,"The part that matters most"); title(s,"What we'd actually shoot");
  s.addText("Six formats. Each one does a specific job — nothing gets filmed just to fill a slot.",
    {x:M,y:1.9,w:W,h:0.35,margin:0,fontFace:BF,fontSize:16,color:MUTED});
  const fm=[["Screen recordings","\"Watch me write a month of content for a local business in 20 minutes.\"","proves you can actually do it. Highest watch-time format you have."],
    ["You, talking — 60 to 90 seconds","One idea, said properly, straight to camera, in Hinglish.","builds trust. This is the format that makes people book you."],
    ["The experiment diary","\"Day 12 of 60.\" Short, honest updates on something you're actually doing.","turns followers into an audience that comes back."],
    ["Before and after","A real account, a real week, a real piece of work — shown both ways.","undeniable proof. Gets saved and shared more than anything else."],
    ["Real life, unpolished","The kitchen, the school run, the laptop open at 11pm.","makes you reachable. This is what your audience recognises."],
    ["Long-form, for YouTube","12–20 minutes, taught properly. Cut from the same day's filming.","gets found in search, for years — not 72 hours."]];
  fm.forEach((f,i)=>{const c=i%2,r=Math.floor(i/2),x=M+c*6.15,y=2.32+r*1.46,last=i===5;
    card(s,x,y,5.7,1.36,last?BERRY:TINT);
    s.addText(f[0],{x:x+0.3,y:y+0.11,w:5.1,h:0.3,margin:0,fontFace:BF,fontSize:15.5,bold:true,color:last?GOLD:BERRY});
    s.addText(f[1],{x:x+0.3,y:y+0.43,w:5.1,h:0.46,margin:0,fontFace:BF,fontSize:13,color:last?WHITE:INK,lineSpacing:18});
    s.addText([{text:"Does: ",options:{bold:true,color:last?WHITE:INK}},{text:f[2],options:{color:last?MUTEDD:MUTED}}],
      {x:x+0.3,y:y+0.91,w:5.1,h:0.42,margin:0,fontFace:BF,fontSize:12,lineSpacing:16});});
  note(s,6.72,"Not one of these needs a crew, a studio or a lighting setup. All of it is you, on your phone, at home.");}

/* 16 THE WEEK */{const s=light(); eyebrow(s,"How it runs"); title(s,"What a week actually looks like");
  const wk=[["SUNDAY","We send you the week's shot list — what to say, in what order. Ten lines, no scripts to memorise.",TINT,INK],
    ["MONDAY","Your 30 minutes. You record everything for the week on your phone and send it across. Filming done.",BERRY,WHITE],
    ["MON–TUE","We edit, subtitle, design covers, and write captions in your voice — not in AI voice.",TINT,INK],
    ["TUE–SAT","Five posts go out. We publish and schedule. One long-form goes to YouTube from the same footage.",TINT,INK],
    ["EVERY DAY","You spend 20 minutes in your own DMs and comments. We draft the repetitive replies.",TINT,INK],
    ["FRIDAY","One page from us: what worked, what didn't, and what we're changing next week.",PLUM,WHITE]];
  let y=2.0;
  wk.forEach(r=>{s.addShape(pres.ShapeType.roundRect,{x:M,y,w:W,h:0.75,fill:{color:r[2]},rectRadius:0.1});
    s.addText(r[0],{x:M+0.32,y,w:1.75,h:0.75,margin:0,fontFace:BF,fontSize:13.5,bold:true,
      color:r[2]===TINT?BERRY:GOLD,valign:"middle"});
    s.addText(r[1],{x:M+2.15,y,w:W-2.5,h:0.75,margin:0,fontFace:BF,fontSize:15,color:r[3],valign:"middle",lineSpacing:20});
    y+=0.86;});}

/* 17 WHERE IT GOES */{const s=light(); eyebrow(s,"One shoot, three homes"); title(s,"Where the content goes, and why");
  const pl=[["Instagram","DISCOVERY",TINT,INK,BERRY,MUTED,
      "Where strangers find you. Reels travel fastest and have the highest engagement of any short format.",
      "But: around 60% of Reels viewers in India are 18–24. Younger than the women you're built for."],
    ["YouTube","WHERE YOUR AUDIENCE ACTUALLY IS",BERRY,WHITE,GOLD,MUTEDD,
      "467 million monthly users in India — bigger than every platform except WhatsApp. And it skews 25–34.",
      "And: a reel dies in 72 hours. A YouTube video keeps being found for years, because people search it."],
    ["WhatsApp","THE RELATIONSHIP",TINT,INK,BERRY,MUTED,
      "In India, this is where people actually reply. Not email.",
      "And it's yours. If Instagram changes its mind tomorrow, this list still exists."]];
  pl.forEach((p,i)=>{const x=M+i*3.94; card(s,x,2.05,3.74,2.9,p[2]);
    s.addText(p[0],{x:x+0.32,y:2.28,w:3.1,h:0.35,margin:0,fontFace:BF,fontSize:18,bold:true,color:p[4]});
    s.addText(p[1],{x:x+0.32,y:2.64,w:3.2,h:0.3,margin:0,fontFace:BF,fontSize:11,charSpacing:1,color:p[5]});
    s.addText(p[6],{x:x+0.32,y:3.02,w:3.1,h:0.9,margin:0,fontFace:BF,fontSize:13.5,color:p[3],lineSpacing:19});
    s.addText(p[7],{x:x+0.32,y:3.98,w:3.1,h:0.85,margin:0,fontFace:BF,fontSize:12.5,color:p[4],lineSpacing:18});});
  card(s,M,5.35,W,1.1,PLUM);
  s.addText("Same 30 minutes of filming. Three destinations. That's the whole argument for having a production partner rather than posting to one app.",
    {x:M+0.5,y:5.35,w:W-1.0,h:1.1,margin:0,fontFace:BF,fontSize:17.5,color:WHITE,valign:"middle",lineSpacing:25});
  foot(s,"Platform figures: YouTube India monthly users and age skew, 2026 industry reporting.");}

/* 18 HOW THE MONEY WORKS */{const s=light(); eyebrow(s,"The part everything else exists for");
  title(s,"How this actually turns into money");
  s.addText("Nobody buys from a stranger. This is the path from someone who scrolls past you to someone who pays you.",
    {x:M,y:1.9,w:W,h:0.35,margin:0,fontFace:BF,fontSize:16,color:MUTED});
  const path=[["1","She sees a reel","You show a result. You hold back the method.",TINT,INK,BERRY,WHITE],
    ["2","She asks for it","A comment or a DM. This is the moment we design for.",TINT,INK,BERRY,WHITE],
    ["3","She joins your WhatsApp","Now she's yours, not Instagram's.",BERRY,WHITE,GOLD,PLUM],
    ["4","She hears from you weekly","Useful things. Not selling. Trust is built here.",TINT,INK,BERRY,WHITE],
    ["5","She buys","Something small first. Then the real thing.",PLUM,WHITE,GOLD,PLUM]];
  path.forEach((c,i)=>{const x=M+i*2.38; card(s,x,2.4,2.24,1.78,c[3]);
    badge(s,x+0.24,2.6,c[0],c[5],c[6],0.36);
    s.addText(c[1],{x:x+0.24,y:3.06,w:1.85,h:0.42,margin:0,fontFace:BF,fontSize:14,bold:true,color:c[4],lineSpacing:18});
    s.addText(c[2],{x:x+0.24,y:3.48,w:1.9,h:0.62,margin:0,fontFace:BF,fontSize:11,
      color:c[3]===TINT?MUTED:MUTEDD,lineSpacing:14});});
  card(s,M,4.55,W,1.18,BERRY);
  s.addText("We're not bringing you clients from outside. We're building the machine that turns the women already watching you into women who pay you.",
    {x:M+0.5,y:4.55,w:W-1.0,h:1.18,margin:0,fontFace:BF,fontSize:18,color:WHITE,valign:"middle",lineSpacing:25});
  note(s,6.05,"Right now that machine doesn't exist. There's no free thing, no list, no first step — so even the people who love your posts have nowhere to go.");}

/* 19 WHAT SHE SELLS */{const s=light(); eyebrow(s,"The offer"); title(s,"What you'd actually sell");
  s.addText("You may already have this planned — if so, tell me and I'll build around it. This is simply how I'd think about it.",
    {x:M,y:1.9,w:W,h:0.35,margin:0,fontFace:BF,fontSize:16,color:MUTED});
  const tiers=[["Free","a prompt pack she can use tonight","to get her WhatsApp number. Nothing else.",TINT,INK,BERRY,MUTED],
    ["One evening","a live workshop, 90 minutes","the first time she pays you. Small enough to say yes to, real enough to prove she's serious.",TINT,INK,BERRY,MUTED],
    ["Six weeks","a group programme with live calls","your real income. Taught once, to a room — so it doesn't eat your calendar the way 1:1 does.",BERRY,WHITE,GOLD,MUTEDD],
    ["Every month","a membership, billed monthly","money that arrives without a launch. The most valuable thing you can build.",PLUM,WHITE,GOLD,MUTEDD]];
  let y=2.45;
  tiers.forEach(t=>{s.addShape(pres.ShapeType.roundRect,{x:M,y,w:W,h:0.92,fill:{color:t[3]},rectRadius:0.1});
    s.addText(t[0],{x:M+0.32,y:y+0.16,w:2.3,h:0.3,margin:0,fontFace:BF,fontSize:15,bold:true,color:t[5]});
    s.addText(t[1],{x:M+0.32,y:y+0.46,w:2.45,h:0.42,margin:0,fontFace:BF,fontSize:11.5,color:t[6],lineSpacing:14});
    s.addText([{text:"Its job: ",options:{bold:true}},{text:t[2],options:{}}],
      {x:M+3.0,y,w:W-3.35,h:0.92,margin:0,fontFace:BF,fontSize:15,color:t[4],valign:"middle",lineSpacing:20});
    y+=1.03;});
  s.addText([{text:"And here's the neat part: the monthly challenge we'd film anyway ",options:{}},
    {text:"is",options:{italic:true}},{text:" the membership. Same work, twice the use.",options:{}}],
    {x:M,y:6.65,w:11.6,h:0.5,margin:0,fontFace:BF,fontSize:16.5,bold:true,color:BERRY});}

/* 20 WHATSAPP */{const s=light(); eyebrow(s,"The engine room"); title(s,"Why WhatsApp, and how we'd run it");
  [["535M","Indians on WhatsApp. Your audience is already there, every day.",PLUM],
   ["90%+","read rate on a properly opted-in list. Email sits around 20–25%.",PLUM],
   ["~45%","reply rate, against about 6% on email. People actually answer.",PLUM],
   ["Yours","If Instagram changes tomorrow, this list still exists.",BERRY]]
  .forEach((v,i)=>{const x=M+i*2.97; card(s,x,1.95,2.77,1.5,v[2]);
    s.addText(v[0],{x:x+0.28,y:2.14,w:2.3,h:0.52,margin:0,fontFace:HF,fontSize:29,bold:true,color:GOLD});
    s.addText(v[1],{x:x+0.28,y:2.68,w:2.3,h:0.68,margin:0,fontFace:BF,fontSize:11.5,color:MUTEDD,lineSpacing:15});});
  const how=[["GETTING THEM ON","A keyword in the reel — \"comment PROMPT\" — triggers an automatic reply that asks for her number. We set it up and maintain it.",TINT,INK,BERRY],
    ["KEEPING THEM WARM","One genuinely useful message a week. Written by us, in your voice, approved by you. No selling.",TINT,INK,BERRY],
    ["WHEN YOU LAUNCH","A short sequence over five or six days before a workshop or intake opens. This is where the sales actually happen.",BERRY,WHITE,GOLD]];
  let y=3.75;
  how.forEach(r=>{s.addShape(pres.ShapeType.roundRect,{x:M,y,w:W,h:0.78,fill:{color:r[2]},rectRadius:0.1});
    s.addText(r[0],{x:M+0.32,y,w:2.4,h:0.78,margin:0,fontFace:BF,fontSize:13,bold:true,color:r[4],valign:"middle"});
    s.addText(r[1],{x:M+2.95,y,w:W-3.3,h:0.78,margin:0,fontFace:BF,fontSize:14.5,color:r[3],valign:"middle",lineSpacing:20});
    y+=0.89;});
  foot(s,"WhatsApp benchmarks: India marketing reporting, 2026. Figures are for opted-in lists, not bought contacts — we would never buy contacts.");}

/* 18 TWO WAYS */{const s=light(); eyebrow(s,"Two ways we can work"); title(s,"Both are real. They do different jobs.");
  card(s,M,1.95,5.75,3.9,TINT);
  s.addText("OPTION 1",{x:M+0.38,y:2.18,w:5.0,h:0.28,margin:0,fontFace:BF,fontSize:12.5,bold:true,charSpacing:1.6,color:MUTED});
  s.addText("Production only",{x:M+0.38,y:2.5,w:5.0,h:0.45,margin:0,fontFace:HF,fontSize:26,bold:true,color:INK});
  s.addText("You direct. We shoot and edit.",{x:M+0.38,y:3.0,w:5.0,h:0.3,margin:0,fontFace:BF,fontSize:14,color:MUTED});
  bl(s,["Shooting days and editing","Covers, captions, subtitles","You decide what to post and when",
    "Strategy, DMs and growth stay with you"],{x:M+0.38,y:3.4,w:5.0,h:1.3,fontSize:14});
  s.addText([{text:"Straight answer: ",options:{bold:true}},
    {text:"this works well if you already know exactly what neXtHer is. It makes your content look better. It won't fix the five-identities problem — that isn't a filming problem.",options:{}}],
    {x:M+0.38,y:4.75,w:5.0,h:0.95,margin:0,fontFace:BF,fontSize:13,color:BERRY,lineSpacing:19});
  card(s,7.05,1.95,5.67,3.9,BERRY);
  s.addText("OPTION 2 — WHAT I'D RECOMMEND",{x:7.43,y:2.18,w:5.0,h:0.28,margin:0,fontFace:BF,fontSize:12.5,bold:true,charSpacing:1.6,color:GOLD});
  s.addText("Production + the system",{x:7.43,y:2.5,w:5.0,h:0.45,margin:0,fontFace:HF,fontSize:26,bold:true,color:WHITE});
  s.addText("We build the brand with you, then run it every week.",{x:7.43,y:3.0,w:5.0,h:0.3,margin:0,fontFace:BF,fontSize:14,color:MUTEDD});
  bl(s,["Everything in Option 1","The positioning decision and your named method",
    "Profile rebuilt — bio, pinned posts, highlights","Five posts a week, published for you",
    "YouTube and WhatsApp from the same shoot","Weekly numbers, so you always know what's working"],
    {x:7.43,y:3.4,w:4.95,h:1.9,fontSize:14,color:WHITE});
  s.addText([{text:"This is the one that changes the outcome",options:{bold:true}},
    {text:", because it fixes what's actually holding the account back.",options:{}}],
    {x:7.43,y:5.3,w:4.95,h:0.5,margin:0,fontFace:BF,fontSize:13,color:GOLD,lineSpacing:19});
  note(s,6.1,"If Option 1 is what you want, say so and we'll do it properly. I'd just rather you chose it knowing what it does and doesn't solve.");}

/* 19 90 DAYS */{const s=light(); eyebrow(s,"What changes"); title(s,"The first 90 days, honestly");
  [["WEEKS 1–2","Decide and rebuild",["One audience, one promise","Your named method","Bio, pinned posts, highlights"],TINT,INK],
   ["WEEKS 3–8","Volume and voice",["Five posts a week, every week","You, teaching, on camera","YouTube from the same shoot"],TINT,INK],
   ["WEEKS 9–12","Compound",["Double down on what worked","Your first paid workshop","Systems running on their own"],BERRY,WHITE]]
  .forEach((p,i)=>{const x=M+i*4.02; card(s,x,1.95,3.82,2.05,p[3]);
    s.addText(p[0],{x:x+0.3,y:2.15,w:3.2,h:0.28,margin:0,fontFace:BF,fontSize:12,bold:true,charSpacing:1.6,color:i===2?GOLD:BERRY});
    s.addText(p[1],{x:x+0.3,y:2.47,w:3.2,h:0.38,margin:0,fontFace:HF,fontSize:20,bold:true,color:p[4]});
    bl(s,p[2],{x:x+0.3,y:2.94,w:3.2,h:0.95,fontSize:12.5,color:p[4],paraSpaceAfter:4,lineSpacing:17});});
  s.addText("Where you'd realistically be at day 90:",{x:M,y:4.35,w:W,h:0.35,margin:0,fontFace:BF,fontSize:16,bold:true,color:BERRY});
  [["~65","posts, vs 34 today — your library doubles"],["500","people on a WhatsApp list you own"],
   ["12","YouTube videos working in search for you"],["1","clear brand a stranger gets in five seconds"]]
  .forEach((v,i)=>{const x=M+i*2.97; card(s,x,4.75,2.77,1.38,PLUM);
    s.addText(v[0],{x:x+0.28,y:4.94,w:2.2,h:0.5,margin:0,fontFace:HF,fontSize:30,bold:true,color:GOLD});
    s.addText(v[1],{x:x+0.28,y:5.46,w:2.3,h:0.6,margin:0,fontFace:BF,fontSize:12,color:MUTEDD,lineSpacing:16});});
  foot(s,"Katie reached 415K in about a year across 369 posts. Nobody can promise you a follower number — but volume, clarity and consistency are the levers she pulled, and they're the ones we'd pull.");}

/* 20 WHAT I NEED */{const s=light(); eyebrow(s,"Your side of it"); title(s,"What I'd need from you");
  s.addText("Deliberately small. You have two children and a business to build — the point of a partner is that you do less, not more.",
    {x:M,y:1.95,w:11.4,h:0.6,margin:0,fontFace:BF,fontSize:17,color:MUTED,lineSpacing:24});
  [["30 minutes of filming a week","On your own phone, at home. We send the shot list and the setup."],
   ["20 minutes a day in your DMs","This one can't be outsourced — people are buying you. We'll draft the rest."],
   ["Willingness to speak on camera","In Hinglish, the way you'd talk to a friend. We'll coach you through month one."],
   ["Permission to be mid-journey","You don't have to have arrived. Katie's power comes from still being on the way."]]
  .forEach((it,i)=>{const c=i%2,r=Math.floor(i/2),x=M+c*6.15,y=2.85+r*1.35;
    badge(s,x,y,String(i+1),BERRY,WHITE,0.55);
    s.addText(it[0],{x:x+0.8,y:y-0.02,w:5.1,h:0.35,margin:0,fontFace:BF,fontSize:17,bold:true,color:INK});
    s.addText(it[1],{x:x+0.8,y:y+0.36,w:5.1,h:0.7,margin:0,fontFace:BF,fontSize:13.5,color:MUTED,lineSpacing:19});});
  card(s,M,5.75,W,1.1,BERRY);
  s.addText("Everything else — shooting, editing, captions, covers, posting, YouTube, the list, the numbers — is mine to carry.",
    {x:M+0.5,y:5.75,w:W-1.0,h:1.1,margin:0,fontFace:BF,fontSize:18,color:WHITE,valign:"middle",lineSpacing:25});}

/* 21 CLOSE */{const s=dark();
  s.addShape(pres.ShapeType.ellipse,{x:-2.9,y:6.0,w:4.2,h:4.2,fill:{color:BERRY}});
  s.addShape(pres.ShapeType.ellipse,{x:11.2,y:-1.5,w:4.0,h:4.0,fill:{color:ROSE},transparency:65});
  s.addImage({path:LOGO_DARK,x:M,y:0.56,w:3.0,h:0.71});
  s.addText("You're closer than you think",{x:M,y:2.0,w:9,h:0.75,margin:0,fontFace:HF,fontSize:40,bold:true,color:WHITE});
  s.addText("You have the hard parts already — the story, the instinct, the discipline to keep posting, and you're living the exact life your audience is living.",
    {x:M,y:2.9,w:8.7,h:0.8,margin:0,fontFace:BF,fontSize:17,color:MUTEDD,lineSpacing:28});
  s.addText("You've written the line. You've told your followers something is coming.",
    {x:M,y:3.75,w:8.7,h:0.45,margin:0,fontFace:BF,fontSize:17,color:MUTEDD});
  s.addText([{text:"What's missing is ",options:{color:MUTEDD}},{text:"one decision",options:{color:WHITE,bold:true}},
    {text:", and someone to carry the weight of making it real every week — so you can go back to being the coach instead of the editor.",options:{color:MUTEDD}}],
    {x:M,y:4.3,w:8.7,h:0.9,margin:0,fontFace:BF,fontSize:17,lineSpacing:28});
  s.addText("That second part is what we do.",{x:M,y:5.45,w:9,h:0.55,margin:0,fontFace:HF,fontSize:27,bold:true,color:WHITE});
  s.addText("Kiran  ·  Production X Creative Studio",{x:M,y:6.3,w:4.6,h:0.3,margin:0,fontFace:BF,fontSize:14.5,color:MUTEDD});
  s.addText("kiran@productionx.in",{x:5.5,y:6.3,w:2.9,h:0.3,margin:0,fontFace:BF,fontSize:14.5,color:GOLD});
  s.addText("+91 93919 26846",{x:8.6,y:6.3,w:2.8,h:0.3,margin:0,fontFace:BF,fontSize:14.5,color:GOLD});}

pres.writeFile({fileName:__dirname+"/neXtHer-What-I-Found.pptx"}).then(f=>console.log("WROTE",f));
