const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE";
pres.author = "ProductionX";
pres.title = "neXtHer — What I Found";

const PLUM="3D1B2E", BERRY="6D2E46", ROSE="A26769", GOLD="D9A441", WHITE="FFFFFF",
      TINT="F7F2F4", INK="2B1620", MUTED="7A6068", MUTEDD="C9AEB8",
      GREENBG="F1F6F2", GREEN="4A7C59";
const HF="Cambria", BF="Calibri";
const M=0.7, W=13.3-M*2;

const dark=()=>{const s=pres.addSlide();s.background={color:PLUM};return s;};
const light=()=>{const s=pres.addSlide();s.background={color:WHITE};return s;};
function eyebrow(s,t,d){s.addText(t.toUpperCase(),{x:M,y:0.45,w:W,h:0.3,margin:0,
  fontFace:BF,fontSize:12,bold:true,charSpacing:2,color:d?GOLD:ROSE});}
function title(s,t,d,o){o=o||{};s.addText(t,{x:M,y:o.y||0.82,w:o.w||W,h:o.h||1.0,margin:0,
  fontFace:HF,fontSize:o.size||38,bold:true,color:d?WHITE:INK,lineSpacing:44});}
function badge(s,x,y,l,fill,tc,d){d=d||0.55;
  s.addShape(pres.ShapeType.ellipse,{x,y,w:d,h:d,fill:{color:fill}});
  s.addText(l,{x,y,w:d,h:d,margin:0,fontFace:BF,fontSize:d>0.5?15:13,bold:true,
    color:tc,align:"center",valign:"middle"});}
function note(s,y,t,w){s.addText(t,{x:M,y,w:w||W,h:0.68,margin:0,
  fontFace:HF,fontSize:17,italic:true,color:GOLD,lineSpacing:24});}
function foot(s,t,d){s.addText(t,{x:M,y:6.9,w:W,h:0.35,margin:0,
  fontFace:BF,fontSize:10.5,italic:true,color:d?MUTEDD:MUTED});}
function bullets(s,items,o){s.addText(items.map((t,i)=>({text:t,
  options:{bullet:true,breakLine:i!==items.length-1}})),
  Object.assign({margin:0,fontFace:BF,fontSize:13,color:INK,paraSpaceAfter:7,lineSpacing:19},o));}
function card(s,x,y,w,h,fill){s.addShape(pres.ShapeType.roundRect,
  {x,y,w,h,fill:{color:fill},rectRadius:0.14});}

/* 1 COVER */{
  const s=dark();
  s.addShape(pres.ShapeType.ellipse,{x:9.5,y:-1.7,w:5.8,h:5.8,fill:{color:BERRY}});
  s.addShape(pres.ShapeType.ellipse,{x:11.5,y:4.5,w:3.3,h:3.3,fill:{color:ROSE},transparency:60});
  s.addText("FOR JUHI AGARWAL  ·  AUGUST 2026",{x:M,y:2.1,w:8,h:0.3,margin:0,
    fontFace:BF,fontSize:12,bold:true,charSpacing:2,color:GOLD});
  s.addText("neXtHer",{x:M,y:2.5,w:8,h:0.82,margin:0,fontFace:HF,fontSize:62,bold:true,color:WHITE});
  s.addText("What I found",{x:M,y:3.4,w:8,h:0.6,margin:0,fontFace:HF,fontSize:34,color:GOLD});
  s.addText("You asked me to film, edit, publish and grow. Before I answered that, I wanted to actually understand what I'd be filming — and what would make it work.",
    {x:M,y:4.2,w:7.2,h:1.1,margin:0,fontFace:BF,fontSize:17,color:MUTEDD,lineSpacing:26});
  s.addText([{text:"Prepared by  ",options:{color:MUTEDD}},{text:"ProductionX",options:{color:WHITE,bold:true}}],
    {x:M,y:5.9,w:6,h:0.3,margin:0,fontFace:BF,fontSize:14});
  s.addNotes("Send after she replies. Warm, research-led, no pricing.");
}

/* 2 HER WORDS */{
  const s=light(); eyebrow(s,"Where we started"); title(s,"Your words, first");
  card(s,M,1.95,W,1.7,TINT);
  s.addText("\"I'm building a personal brand focused on helping women (especially mothers) use AI, mindset, and practical systems to create more freedom and financial independence.\n\nI'm in the early stages and am looking for a digital production partner who can help me film, edit, publish, and grow high quality content as we build the brand together.\"",
    {x:M+0.5,y:1.95,w:W-1.0,h:1.7,margin:0,fontFace:HF,fontSize:15,italic:true,
     color:BERRY,valign:"middle",lineSpacing:22});
  s.addText("Most people would reply to that with a package and a price. I didn't want to do that before I understood the brand I'd be building with you.",
    {x:M,y:4.1,w:11.2,h:0.7,margin:0,fontFace:BF,fontSize:17,color:INK,lineSpacing:26});
  s.addText("So I spent a week going through everything you've published — and everything the two accounts you sent me have published.",
    {x:M,y:4.9,w:11.2,h:0.7,margin:0,fontFace:BF,fontSize:19,bold:true,color:BERRY,lineSpacing:28});
  note(s,5.85,"This is what I found.");
}

/* 3 THE WORKING */{
  const s=light(); eyebrow(s,"Before anything else"); title(s,"What I actually went through");
  s.addText("YOUR SIDE",{x:M,y:1.9,w:5.9,h:0.3,margin:0,fontFace:BF,fontSize:14,bold:true,charSpacing:1,color:BERRY});
  bullets(s,["All 34 posts on @juhiagarwal.coach — every cover, every hook",
    "Every caption, read in full — not skimmed",
    "Your Stories, including the growth-journey poll and the laptop teaser",
    "Your Threads account — every post and every reply you've written",
    "Your bio, your CTA, your highlights, your following count",
    "Your audio choices and posting rhythm"],{x:M,y:2.3,w:5.6,h:2.6,fontSize:14});
  s.addText("THE TWO YOU SENT ME",{x:7.0,y:1.9,w:5.6,h:0.3,margin:0,fontFace:BF,fontSize:14,bold:true,charSpacing:1,color:BERRY});
  bullets(s,["@upgradingkatie — 369 posts, her pinned trio, her comment sections, her store, her manifesto post",
    "@melrobbins — her grid, guest structure, quote-card system"],{x:7.0,y:2.3,w:5.4,h:1.1,fontSize:14});
  s.addText("THE MARKET",{x:7.0,y:3.5,w:5.6,h:0.3,margin:0,fontFace:BF,fontSize:14,bold:true,charSpacing:1,color:BERRY});
  bullets(s,["AI education in India — who it serves, and who it doesn't",
    "Mom content in India","Women & money content in India",
    "What Indian audiences actually pay for, and what they don't"],{x:7.0,y:3.9,w:5.4,h:1.6,fontSize:14});
  card(s,M,5.45,W,0.9,BERRY);
  s.addText([{text:"Roughly ",options:{color:WHITE}},{text:"20 hours",options:{color:GOLD,bold:true}},
    {text:". I wanted to come to you with something you hadn't already thought of.",options:{color:WHITE}}],
    {x:M+0.45,y:5.45,w:W-0.9,h:0.9,margin:0,fontFace:BF,fontSize:16,valign:"middle"});
}

/* 4 WHERE YOU ARE */{
  const s=light(); eyebrow(s,"Starting point"); title(s,"Where you are today");
  const st=[["34","posts published"],["1,209","followers"],["5","accounts you follow"],
            ["1","story highlight"],["0","pinned posts"]];
  st.forEach((v,i)=>{const x=M+i*2.42;
    card(s,x,1.85,2.0,1.3,TINT);
    s.addText(v[0],{x:x+0.28,y:2.05,w:1.5,h:0.55,margin:0,fontFace:HF,fontSize:32,bold:true,color:BERRY});
    s.addText(v[1],{x:x+0.28,y:2.62,w:1.55,h:0.45,margin:0,fontFace:BF,fontSize:11.5,color:MUTED,lineSpacing:15});});
  s.addText("Here's the thing I want to say before anything else: you are doing more right than you think.",
    {x:M,y:3.65,w:11.5,h:0.6,margin:0,fontFace:BF,fontSize:19,bold:true,color:BERRY,lineSpacing:26});
  const good=["You post consistently. Most people quit before 34.",
    "You write genuinely well. Your captions are the best thing on the account.",
    "You're comfortable on camera. That's rarer than you think.",
    "You spotted Katie yourself. You can read a market.",
    "You're already networking — I saw your Threads replies.",
    "You test things. The slider poll story was a good instinct."];
  good.forEach((t,i)=>{const c=i%2,r=Math.floor(i/2);
    s.addText("✓   "+t,{x:M+c*6.0,y:4.35+r*0.62,w:5.7,h:0.55,margin:0,
      fontFace:BF,fontSize:14,color:INK,lineSpacing:20});});
  note(s,6.25,"The problem isn't effort. It's that the effort is going in five directions.");
}

/* 5 PATTERN 1 */{
  const s=light(); eyebrow(s,"Pattern 01"); title(s,"Five places you show up. Five different Juhis.");
  const rows=[["Your bio","Helping ambitious women overcome burnout"],
    ["Your bio sub-line","Mindset · Healing · Confidence"],
    ["All 34 posts","Save your marriage"],
    ["Your Stories","Growth quotes, in a completely different visual style"],
    ["Your Threads","Healing + productivity + accountability"],
    ["neXtHer — the real one","AI, systems, income, independence"]];
  let y=1.9;
  rows.forEach((r,i)=>{const last=i===rows.length-1;
    s.addShape(pres.ShapeType.roundRect,{x:M,y,w:W,h:0.62,fill:{color:last?BERRY:TINT},rectRadius:0.1});
    s.addText(r[0],{x:M+0.32,y,w:2.4,h:0.62,margin:0,fontFace:BF,fontSize:13,bold:true,
      color:last?MUTEDD:MUTED,valign:"middle"});
    s.addText(r[1],{x:M+2.85,y,w:W-3.2,h:0.62,margin:0,fontFace:BF,fontSize:15,
      color:last?WHITE:INK,valign:"middle"});
    y+=0.72;});
  s.addText("A new visitor has to guess which one you are. So does the algorithm — and it guesses based on what you post, not what your bio says.",
    {x:M,y:6.35,w:W,h:0.6,margin:0,fontFace:BF,fontSize:15,bold:true,color:BERRY,lineSpacing:22});
}

/* 6 PATTERN 2 — HERO */{
  const s=light(); eyebrow(s,"Pattern 02 · my favourite thing I found");
  title(s,"You've already written your best line");
  s.addText("You wrote this on Threads, in a reply, to a stranger:",
    {x:M,y:1.75,w:W,h:0.3,margin:0,fontFace:BF,fontSize:15,color:MUTED});
  card(s,M,2.15,W,1.5,BERRY);
  s.addText([{text:"\"I'm a coach who merges healing with productivity and accountability. I work with women who want to get ",options:{color:WHITE}},
    {text:"hotter, richer, more energized and more loved",options:{color:GOLD,bold:true}},
    {text:".\"",options:{color:WHITE}}],
    {x:M+0.5,y:2.15,w:W-1.0,h:1.5,margin:0,fontFace:HF,fontSize:24,italic:true,valign:"middle",lineSpacing:34});
  s.addText("And this is what your Instagram bio says:",
    {x:M,y:4.0,w:W,h:0.3,margin:0,fontFace:BF,fontSize:15,color:MUTED});
  card(s,M,4.38,W,0.82,TINT);
  s.addText("\"Helping Ambitious Women Overcome Burnout · Mindset • Healing • Confidence\"",
    {x:M+0.5,y:4.38,w:W-1.0,h:0.82,margin:0,fontFace:HF,fontSize:18,italic:true,color:MUTED,valign:"middle"});
  s.addText("The first one is specific. A woman reads it and pictures herself. The second is what almost every coach on Instagram says.",
    {x:M,y:5.5,w:11.5,h:0.6,margin:0,fontFace:BF,fontSize:17,color:INK,lineSpacing:24});
  note(s,6.3,"You wrote the good one yourself, without thinking about it. It's sitting on an account with 3 followers.");
}

/* 7 PATTERN 3 */{
  const s=light(); eyebrow(s,"Pattern 03"); title(s,"Your best writing is where the algorithm can't see it",false,{size:32});
  card(s,M,1.95,5.6,2.5,TINT);
  s.addText("WHAT'S ON THE VIDEO",{x:M+0.36,y:2.2,w:4.8,h:0.3,margin:0,fontFace:BF,fontSize:14,bold:true,color:BERRY});
  s.addText("A title card over b-roll of you walking.\n\nThen two words:  \"Read caption.\"",
    {x:M+0.36,y:2.65,w:4.9,h:1.5,margin:0,fontFace:HF,fontSize:19,color:INK,lineSpacing:27});
  card(s,7.0,1.95,5.6,2.5,ROSE);
  s.addText("WHAT'S IN THE CAPTION",{x:7.36,y:2.2,w:4.8,h:0.3,margin:0,fontFace:BF,fontSize:14,bold:true,color:WHITE});
  s.addText("Four sentences that damage a relationship. Five habits that quietly destroy one. Real, structured, genuinely useful writing — often 300 words of it.",
    {x:7.36,y:2.65,w:4.9,h:1.5,margin:0,fontFace:BF,fontSize:15,color:WHITE,lineSpacing:22});
  s.addText("Instagram decides who sees a reel based on how long people watch it and how they react to the video. It can't reward a caption. So your strongest work is in the one place the platform doesn't count.",
    {x:M,y:4.85,w:11.5,h:1.0,margin:0,fontFace:BF,fontSize:17,color:INK,lineSpacing:26});
  note(s,6.05,"The fix is not writing less. It's saying it out loud, on camera, in the first five seconds.");
}

/* 8 PATTERN 4 */{
  const s=dark();
  s.addShape(pres.ShapeType.ellipse,{x:10.1,y:1.2,w:4.3,h:4.3,fill:{color:BERRY}});
  eyebrow(s,"Pattern 04",true);
  s.addText("34",{x:M,y:1.5,w:4,h:1.35,margin:0,fontFace:HF,fontSize:100,bold:true,color:GOLD});
  s.addText("posts, and we still haven't heard your voice",
    {x:M,y:2.95,w:6.5,h:0.4,margin:0,fontFace:BF,fontSize:18,color:MUTEDD});
  s.addText("No talking-head. No piece to camera. Not once.",
    {x:M,y:3.9,w:8.5,h:1.15,margin:0,fontFace:HF,fontSize:32,bold:true,color:WHITE,lineSpacing:40});
  s.addText("You're a coach. What people are actually buying is how you think — your judgement, your warmth, the way you say a hard thing kindly. Nobody has heard that yet.",
    {x:M,y:5.15,w:8.5,h:1.0,margin:0,fontFace:BF,fontSize:16,color:MUTEDD,lineSpacing:24});
  note(s,6.25,"This is the cheapest fix on this entire list. It costs nothing but the decision.",8.5);
}

/* 9 PATTERN 5 */{
  const s=light(); eyebrow(s,"Pattern 05"); title(s,"You've already started — quietly");
  s.addText("One of your Stories, over a photo of your laptop:",
    {x:M,y:1.75,w:W,h:0.3,margin:0,fontFace:BF,fontSize:15,color:MUTED});
  card(s,M,2.15,W,1.3,TINT);
  s.addText("\"Building something crazy for all my girlies ❤️ SO EXCITED\"",
    {x:M+0.5,y:2.15,w:W-1.0,h:1.3,margin:0,fontFace:HF,fontSize:27,bold:true,color:BERRY,valign:"middle"});
  s.addText("You're already announcing neXtHer. You're already excited about it. You just put it somewhere that disappeared after 24 hours, instead of somewhere that keeps working for you.",
    {x:M,y:3.85,w:11.5,h:1.0,margin:0,fontFace:BF,fontSize:17,color:INK,lineSpacing:26});
  card(s,M,5.0,W,1.1,BERRY);
  s.addText("That tells me the direction is already decided in your head. What's missing isn't the idea — it's someone to help you commit to it publicly and keep it going every week.",
    {x:M+0.5,y:5.0,w:W-1.0,h:1.1,margin:0,fontFace:BF,fontSize:17,color:WHITE,valign:"middle",lineSpacing:24});
}

/* 10 WORKING STYLE */{
  const s=light(); eyebrow(s,"How you work — an honest read"); title(s,"What I'd keep, and what I'd change");
  card(s,M,1.8,5.8,4.3,GREENBG);
  s.addText("KEEP — THIS IS WORKING",{x:M+0.34,y:2.05,w:5.1,h:0.3,margin:0,fontFace:BF,fontSize:13.5,bold:true,charSpacing:1,color:GREEN});
  bullets(s,["Consistency. 34 posts is real discipline",
    "Your writing. Structured, warm, actually useful",
    "You're at ease on camera — most coaches aren't",
    "Cover design is consistent — the grid reads as one brand",
    "You pick good hooks. \"5 signs your marriage is already ending\" is strong",
    "You engage on Threads — replying to strangers, joining communities",
    "You experiment — polls, sliders, different formats",
    "You research. You found Katie before I did"],{x:M+0.34,y:2.5,w:5.1,h:3.4,fontSize:12.5});
  card(s,7.0,1.8,5.6,4.3,TINT);
  s.addText("CHANGE — THIS IS COSTING YOU",{x:7.34,y:2.05,w:4.9,h:0.3,margin:0,fontFace:BF,fontSize:13.5,bold:true,charSpacing:1,color:BERRY});
  bullets(s,["Value sits in the caption, not the video",
    "No talking head in 34 posts",
    "Every post asks for a booking — no runway before the ask",
    "Keyword blocks before hashtags do nothing on Instagram",
    "You follow 5 accounts — you network on Threads, not where your audience is",
    "One highlight, no pinned posts — a new visitor has no way in",
    "Three visual languages across grid, stories and profile",
    "Several things launching at once — coaching, marriage, neXtHer, a book club"],
    {x:7.34,y:2.5,w:4.9,h:3.4,fontSize:12.5});
  note(s,6.35,"None of this is a talent problem. Every item on the right is a system problem — and systems are fixable.");
}

/* 11 SWOT */{
  const s=light(); eyebrow(s,"The honest picture"); title(s,"SWOT");
  const q=[
    ["STRENGTHS",GREEN,GREENBG,M,1.75,["100+ women already coached — real experience",
      "You understand the emotional life of Indian married women better than any AI educator in the country",
      "Consistent publisher, strong writer, easy on camera",
      "You're 30 with two kids — you are your audience",
      "You already spotted the right model to follow"]],
    ["WEAKNESSES",BERRY,TINT,7.0,1.75,["Five identities across five surfaces",
      "Audience of 1,209 built on marriage content — not the people who'd buy neXtHer",
      "No voice on camera, no funnel, no list you own",
      "Nothing pinned, nothing for a first-time visitor",
      "Doing all of it alone, alongside two children"]],
    ["OPPORTUNITIES",GREEN,GREENBG,M,4.4,["The exact model is proven — 415K, in the US",
      "Nobody in India is doing it in Hinglish for mothers. I looked",
      "Your relationship expertise is a moat, not baggage — it's why women trust you",
      "Hinglish + Indian household reality is untouched",
      "YouTube demand for \"how to use ChatGPT to…\" is wide open in Hindi"]],
    ["THREATS",BERRY,TINT,7.0,4.4,["The window. This format is ~12 months old. Someone will take this lane in India",
      "The \"AI income\" category has bad neighbours — we have to look obviously different",
      "Attention split across four or five ventures",
      "Doing everything yourself is how good creators stop posting",
      "Reach dips for a few weeks whenever you change direction"]]];
  q.forEach(([hd,hc,bg,x,y,items])=>{
    card(s,x,y,x===M?5.8:5.6,2.45,bg);
    s.addText(hd,{x:x+0.3,y:y+0.2,w:5.0,h:0.28,margin:0,fontFace:BF,fontSize:12.5,bold:true,charSpacing:1.5,color:hc});
    bullets(s,items,{x:x+0.3,y:y+0.58,w:(x===M?5.2:5.0),h:1.75,fontSize:11.5,paraSpaceAfter:5,lineSpacing:16});});
  foot(s,"Based on your published content, your Threads activity, and market research across AI education, mom content and women's finance in India.");
}

/* 12 KATIE */{
  const s=light(); eyebrow(s,"The account you sent me"); title(s,"Katie is you, about twelve months ahead");
  card(s,M,1.9,5.85,2.5,PLUM);
  s.addText("@UPGRADINGKATIE",{x:M+0.38,y:2.22,w:5.0,h:0.3,margin:0,fontFace:BF,fontSize:12.5,bold:true,charSpacing:1.5,color:GOLD});
  s.addText("415,000",{x:M+0.38,y:2.65,w:5.0,h:0.7,margin:0,fontFace:HF,fontSize:42,bold:true,color:GOLD});
  s.addText("followers · 369 posts · about a year",{x:M+0.38,y:3.35,w:5.0,h:0.3,margin:0,fontFace:BF,fontSize:14,color:MUTEDD});
  s.addText("Bio: \"Building my dream life one AI generated to do list at a time — Mom routines · money · glowup\"",
    {x:M+0.38,y:3.72,w:5.1,h:0.6,margin:0,fontFace:BF,fontSize:13.5,italic:true,color:WHITE,lineSpacing:19});
  card(s,7.05,1.9,5.55,2.5,TINT);
  s.addText("SHE IS",{x:7.43,y:2.22,w:4.8,h:0.3,margin:0,fontFace:BF,fontSize:12.5,bold:true,charSpacing:1.5,color:BERRY});
  bullets(s,["32 years old","Two young children","Filming on her phone, in her kitchen and her car",
    "Teaching mothers to use AI for their life and their income"],{x:7.43,y:2.62,w:4.8,h:1.2,fontSize:14});
  s.addText("You're 30. Two kids. Same idea. Starting now.",
    {x:7.43,y:3.9,w:4.8,h:0.35,margin:0,fontFace:BF,fontSize:15,bold:true,color:BERRY});
  card(s,M,4.75,W,1.05,BERRY);
  s.addText("This is the single most encouraging thing in this document. You aren't betting on an idea nobody has tested. Someone with your life, your age and your audience already made it work.",
    {x:M+0.45,y:4.75,w:W-0.9,h:1.05,margin:0,fontFace:BF,fontSize:17,color:WHITE,valign:"middle",lineSpacing:24});
  note(s,6.15,"The only difference between you and her right now is 335 posts and one clear decision.");
}

/* 13 KATIE MECHANICS */{
  const s=light(); eyebrow(s,"What she actually does"); title(s,"Six things Katie does that you don't — yet");
  const m=[["She documents. She doesn't teach.","\"86 days of small boring tasks.\" People come back for the next episode, not the next tip."],
    ["Monthly challenges with public rules","A July challenge, a decluttering challenge. She never runs out of things to post."],
    ["She shows what she earns","\"How much I made in June (zero brand deals).\" Proof beats promises."],
    ["She de-influences","\"No manicure. Car from 2004. No cleaning lady. This is normal.\" It's why she's trusted."],
    ["Everything is selfie camera","No crew, no lighting. She looks like the woman watching her. That's the point."],
    ["Her comments ask for the prompt","Dozens of \"prompt please\" under one post. She shows the result and holds back the method."]];
  m.forEach((it,i)=>{const c=i%2,r=Math.floor(i/2);
    const x=M+c*6.15,y=1.85+r*1.15;
    badge(s,x,y,String(i+1),BERRY,WHITE,0.45);
    s.addText(it[0],{x:x+0.65,y:y-0.05,w:5.2,h:0.32,margin:0,fontFace:BF,fontSize:15,bold:true,color:INK});
    s.addText(it[1],{x:x+0.65,y:y+0.3,w:5.2,h:0.62,margin:0,fontFace:BF,fontSize:12.5,color:MUTED,lineSpacing:17});});
  card(s,M,5.6,W,1.1,TINT);
  s.addText("And one rule from her pinned post that I keep thinking about:",
    {x:M+0.45,y:5.72,w:W-0.9,h:0.3,margin:0,fontFace:BF,fontSize:14,color:MUTED});
  s.addText("\"I use AI to upgrade my life. I never use AI to write my content.\"",
    {x:M+0.45,y:6.05,w:W-0.9,h:0.5,margin:0,fontFace:HF,fontSize:21,bold:true,color:BERRY});
}

/* 14 MEL */{
  const s=light(); eyebrow(s,"The other account you sent me"); title(s,"Mel Robbins is the destination, not the map");
  card(s,M,1.9,5.75,2.25,TINT);
  s.addText("WHAT SITS BEHIND HER INSTAGRAM",{x:M+0.35,y:2.15,w:5.0,h:0.3,margin:0,fontFace:BF,fontSize:13,bold:true,color:BERRY});
  bullets(s,["The #1 selling book of 2025","A top-tier podcast","A live tour",
    "TIME Women of the Year","Twenty years of work"],{x:M+0.35,y:2.58,w:5.0,h:1.4,fontSize:13.5});
  card(s,7.0,1.9,5.6,2.25,BERRY);
  s.addText("WHAT THAT MEANS",{x:7.35,y:2.15,w:4.9,h:0.3,margin:0,fontFace:BF,fontSize:13,bold:true,color:GOLD});
  s.addText("Her quote cards work because they carry her name. Experts appear because she's Mel Robbins. Her Instagram is the result of the authority, not the thing that built it.\n\nCopying that format today would give us beautiful posts that nobody shares.",
    {x:7.35,y:2.55,w:4.9,h:1.55,margin:0,fontFace:BF,fontSize:13,color:WHITE,lineSpacing:19});
  s.addText("But there is one thing worth taking from her, and it might be the most valuable idea in this deck:",
    {x:M,y:4.6,w:W,h:0.35,margin:0,fontFace:BF,fontSize:15,color:MUTED});
  card(s,M,5.05,W,1.5,PLUM);
  s.addText([{text:"Mel's whole career rests on ",options:{color:WHITE}},
    {text:"naming a mechanism.",options:{color:GOLD}}],
    {x:M+0.45,y:5.2,w:W-0.9,h:0.45,margin:0,fontFace:HF,fontSize:23,bold:true});
  s.addText([{text:"The 5 Second Rule. The Let Them Theory. Not advice — a named, repeatable thing people describe to each other when she isn't in the room. ",options:{color:MUTEDD}},
    {text:"neXtHer needs one of those.",options:{color:WHITE,bold:true}}],
    {x:M+0.45,y:5.72,w:W-0.9,h:0.7,margin:0,fontFace:BF,fontSize:15,lineSpacing:22});
}

/* 15 THE GAP */{
  const s=light(); eyebrow(s,"The opening"); title(s,"Nobody in India is standing where you could stand",false,{size:33});
  const rows=[["AI education in India","Speaks to men, students and job-seekers. English, technical, career-shaped."],
    ["Mom content in India","Parenting, lifestyle, product hauls. Nothing about her earning."],
    ["Women & money in India","How to invest money you already have. Not how to make your own."]];
  let y=1.85;
  rows.forEach(r=>{s.addShape(pres.ShapeType.roundRect,{x:M,y,w:W,h:0.74,fill:{color:TINT},rectRadius:0.1});
    s.addText(r[0],{x:M+0.32,y,w:2.9,h:0.74,margin:0,fontFace:BF,fontSize:14.5,bold:true,color:INK,valign:"middle"});
    s.addText(r[1],{x:M+3.3,y,w:W-3.6,h:0.74,margin:0,fontFace:BF,fontSize:14,color:MUTED,valign:"middle"});
    y+=0.85;});
  s.addShape(pres.ShapeType.roundRect,{x:M,y,w:W,h:0.95,fill:{color:BERRY},rectRadius:0.1});
  s.addText("The empty space",{x:M+0.32,y,w:2.9,h:0.95,margin:0,fontFace:BF,fontSize:14.5,bold:true,color:GOLD,valign:"middle"});
  s.addText("An Indian mother teaching other Indian mothers to earn with AI — in Hinglish, with in-laws and school runs and permission in the picture.",
    {x:M+3.3,y,w:W-3.9,h:0.95,margin:0,fontFace:BF,fontSize:15.5,color:WHITE,valign:"middle",lineSpacing:21});
  s.addText([{text:"I searched for someone already doing this. ",options:{color:INK}},
    {text:"I couldn't find her.",options:{color:INK,bold:true}},
    {text:" That won't be true in a year — this format is only about twelve months old, and it's spreading.",options:{color:INK}}],
    {x:M,y:6.2,w:11.5,h:0.7,margin:0,fontFace:BF,fontSize:17,lineSpacing:24});
}

/* 16 ASKED VS NEED */{
  const s=light(); eyebrow(s,"Back to your question"); title(s,"What you asked for, and what I think you need");
  card(s,M,1.85,5.75,2.9,TINT);
  s.addText("WHAT YOU ASKED FOR",{x:M+0.36,y:2.15,w:5.0,h:0.3,margin:0,fontFace:BF,fontSize:13,bold:true,charSpacing:1.5,color:MUTED});
  s.addText("Film\nEdit\nPublish\nGrow",{x:M+0.36,y:2.58,w:5.0,h:1.6,margin:0,fontFace:HF,fontSize:22,bold:true,color:BERRY,lineSpacing:29});
  s.addText("All of which we do, and will do.",{x:M+0.36,y:4.2,w:5.0,h:0.35,margin:0,fontFace:BF,fontSize:14,color:MUTED});
  card(s,7.0,1.85,5.6,2.9,BERRY);
  s.addText("WHAT I THINK YOU NEED FIRST",{x:7.36,y:2.15,w:4.9,h:0.3,margin:0,fontFace:BF,fontSize:13,bold:true,charSpacing:1.5,color:GOLD});
  s.addText("One decision about who neXtHer is for — and a name for the thing you do.",
    {x:7.36,y:2.6,w:4.9,h:1.1,margin:0,fontFace:HF,fontSize:21,bold:true,color:WHITE,lineSpacing:29});
  s.addText("Then the filming has something to be about, and every video builds the same thing instead of five different things.",
    {x:7.36,y:3.85,w:4.9,h:0.8,margin:0,fontFace:BF,fontSize:14,color:MUTEDD,lineSpacing:20});
  card(s,M,5.1,W,1.0,PLUM);
  s.addText("Filming five days a week against five identities doesn't fix the problem. It just produces five kinds of noise, faster.",
    {x:M+0.45,y:5.1,w:W-0.9,h:1.0,margin:0,fontFace:HF,fontSize:21,color:WHITE,valign:"middle",lineSpacing:28});
  note(s,6.45,"I'd rather tell you that now than take your money and let you find out in month three.");
}

/* 17 TWO WAYS */{
  const s=light(); eyebrow(s,"Two ways we can work"); title(s,"Both are real. They just do different jobs.");
  card(s,M,1.8,5.75,4.0,TINT);
  s.addText("OPTION 1",{x:M+0.36,y:2.05,w:5.0,h:0.28,margin:0,fontFace:BF,fontSize:12.5,bold:true,charSpacing:1.5,color:MUTED});
  s.addText("Production only",{x:M+0.36,y:2.38,w:5.0,h:0.45,margin:0,fontFace:HF,fontSize:25,bold:true,color:INK});
  s.addText("You direct. We shoot and edit.",{x:M+0.36,y:2.88,w:5.0,h:0.3,margin:0,fontFace:BF,fontSize:14,color:MUTED});
  bullets(s,["Shooting days and editing","Covers, captions, subtitles",
    "You decide what to post and when","You keep running strategy, DMs and everything else"],
    {x:M+0.36,y:3.28,w:5.0,h:1.3,fontSize:13.5});
  s.addText("Honest note: this works if you already know exactly what neXtHer is and who it's for. It makes your content look better. It won't fix the five-identities problem, because that isn't a filming problem.",
    {x:M+0.36,y:4.7,w:5.0,h:1.0,margin:0,fontFace:BF,fontSize:13,color:BERRY,lineSpacing:19});
  card(s,7.0,1.8,5.6,4.0,BERRY);
  s.addText("OPTION 2 — WHAT I'D RECOMMEND",{x:7.36,y:2.05,w:4.9,h:0.28,margin:0,fontFace:BF,fontSize:12.5,bold:true,charSpacing:1.5,color:GOLD});
  s.addText("Production + the system",{x:7.36,y:2.38,w:4.9,h:0.45,margin:0,fontFace:HF,fontSize:25,bold:true,color:WHITE});
  s.addText("We build the brand with you, then run it every week.",{x:7.36,y:2.88,w:4.9,h:0.3,margin:0,fontFace:BF,fontSize:14,color:MUTEDD});
  bullets(s,["Everything in Option 1","The positioning decision and your named method",
    "Profile rebuilt — bio, pinned posts, highlights","5 posts a week, published for you",
    "YouTube from the same footage","WhatsApp list, DM replies, comment engine",
    "Weekly numbers, so you always know what's working"],
    {x:7.36,y:3.28,w:4.9,h:1.9,fontSize:13.5,color:WHITE});
  s.addText("This is the one that changes the outcome — because it fixes the thing that's actually holding the account back.",
    {x:7.36,y:5.2,w:4.9,h:0.6,margin:0,fontFace:BF,fontSize:13,color:GOLD,lineSpacing:19});
  note(s,6.1,"If you only want Option 1, say so and we'll do it properly. I'd just rather you chose it knowing what it does and doesn't solve.");
}

/* 18 GROWTH */{
  const s=light(); eyebrow(s,"What changes"); title(s,"The first 90 days, honestly");
  const ph=[["WEEKS 1–2","Decide and rebuild",["One audience, one promise","Your named method","Bio, pinned posts, highlights","First videos with you speaking"],TINT,INK],
    ["WEEKS 3–8","Volume and voice",["5 posts a week, every week","Screen recordings — you, teaching","YouTube from the same shoot","WhatsApp list starts filling"],TINT,INK],
    ["WEEKS 9–12","Compound",["Double down on what worked","Your first paid workshop","Systems running without you chasing them"],BERRY,WHITE]];
  ph.forEach((p,i)=>{const x=M+i*4.03;
    card(s,x,1.8,3.84,2.0,p[4]);
    s.addText(p[0],{x:x+0.28,y:2.0,w:3.3,h:0.28,margin:0,fontFace:BF,fontSize:12,bold:true,charSpacing:1.5,color:i===2?GOLD:BERRY});
    s.addText(p[1],{x:x+0.28,y:2.32,w:3.3,h:0.35,margin:0,fontFace:HF,fontSize:19,bold:true,color:p[5]});
    bullets(s,p[2],{x:x+0.28,y:2.75,w:3.3,h:1.0,fontSize:12,color:p[5],paraSpaceAfter:4,lineSpacing:16});});
  s.addText("Where you'd realistically be at day 90:",{x:M,y:4.2,w:W,h:0.35,margin:0,fontFace:BF,fontSize:15,bold:true,color:BERRY});
  const g=[["~65","posts published, vs 34 today — the library doubles"],
    ["500","people on a WhatsApp list you own outright"],
    ["3×","saves and shares per post — the thing that actually drives reach"],
    ["1","clear brand, that a stranger understands in five seconds"]];
  g.forEach((v,i)=>{const x=M+i*3.02;
    card(s,x,4.6,2.83,1.35,PLUM);
    s.addText(v[0],{x:x+0.26,y:4.78,w:2.3,h:0.5,margin:0,fontFace:HF,fontSize:28,bold:true,color:GOLD});
    s.addText(v[1],{x:x+0.26,y:5.3,w:2.35,h:0.6,margin:0,fontFace:BF,fontSize:11.5,color:MUTEDD,lineSpacing:15});});
  foot(s,"Katie reached 415K in about a year across 369 posts. Nobody can promise you a follower number — but volume, clarity and consistency are the levers she pulled, and they're the ones we'd pull.");
}

/* 19 WHAT I NEED */{
  const s=light(); eyebrow(s,"Your side of it"); title(s,"What I'd need from you");
  s.addText("Not much — and deliberately so. You have two children and a business to build. The point of a partner is that you do less, not more.",
    {x:M,y:1.75,w:11.5,h:0.6,margin:0,fontFace:BF,fontSize:17,color:MUTED,lineSpacing:24});
  const n=[["About 30 minutes a week of filming","On your own phone, at home. We give you the setup and a simple guide."],
    ["20 minutes a day in your own DMs","This one can't be outsourced. People are buying you. We'll draft the repetitive replies."],
    ["Willingness to speak on camera","In Hinglish, the way you'd talk to a friend. We'll coach you through the first month."],
    ["Permission to be mid-journey","You don't have to have arrived. Katie's power comes from still being on the way."]];
  n.forEach((it,i)=>{const c=i%2,r=Math.floor(i/2);
    const x=M+c*6.15,y=2.65+r*1.35;
    badge(s,x,y,String(i+1),BERRY,WHITE,0.55);
    s.addText(it[0],{x:x+0.78,y:y-0.02,w:5.1,h:0.35,margin:0,fontFace:BF,fontSize:16.5,bold:true,color:INK});
    s.addText(it[1],{x:x+0.78,y:y+0.36,w:5.1,h:0.7,margin:0,fontFace:BF,fontSize:13,color:MUTED,lineSpacing:19});});
  card(s,M,5.6,W,1.05,BERRY);
  s.addText("Everything else — shooting, editing, captions, covers, posting, YouTube, the list, the numbers — is mine to carry.",
    {x:M+0.45,y:5.6,w:W-0.9,h:1.05,margin:0,fontFace:BF,fontSize:18,color:WHITE,valign:"middle",lineSpacing:25});
}

/* 20 CLOSE */{
  const s=dark();
  s.addShape(pres.ShapeType.ellipse,{x:-2.9,y:6.0,w:4.2,h:4.2,fill:{color:BERRY}});
  s.addShape(pres.ShapeType.ellipse,{x:10.9,y:-1.4,w:4.1,h:4.1,fill:{color:ROSE},transparency:60});
  eyebrow(s,"Where I'd start",true); title(s,"You're closer than you think",true);
  s.addText("You already have the hard parts. You've got the story, the audience instinct, the discipline to keep posting, and you're living the exact life your audience is living.",
    {x:M,y:2.0,w:9.0,h:0.85,margin:0,fontFace:BF,fontSize:17,color:MUTEDD,lineSpacing:28});
  s.addText("You've already written the line. You've already told your followers something is coming.",
    {x:M,y:2.95,w:9.0,h:0.66,margin:0,fontFace:BF,fontSize:17,color:MUTEDD,lineSpacing:28});
  s.addText([{text:"What's missing is ",options:{color:MUTEDD}},
    {text:"one decision",options:{color:WHITE,bold:true}},
    {text:" — and someone to carry the weight of making it real, every week, so you can go back to being the coach instead of the editor.",options:{color:MUTEDD}}],
    {x:M,y:3.6,w:9.0,h:0.9,margin:0,fontFace:BF,fontSize:17,lineSpacing:28});
  s.addText("That second part is what we're good at.",
    {x:M,y:5.1,w:9.0,h:0.6,margin:0,fontFace:HF,fontSize:29,bold:true,color:WHITE});
  card(s,M,5.9,6.4,0.9,BERRY);
  s.addText("Let's get on a call and I'll walk you through all of it properly.",
    {x:M+0.4,y:5.9,w:5.7,h:0.9,margin:0,fontFace:BF,fontSize:17,color:WHITE,valign:"middle"});
}

pres.writeFile({fileName:"/home/user/Assets/clients/juhi-agarwal-nexther/neXtHer-What-I-Found.pptx"})
  .then(f=>console.log("WROTE",f));
