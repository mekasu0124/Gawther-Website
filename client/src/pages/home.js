import React from 'react';
import profPicOfUser from '../images/users/me.png';
import {
    MainContainer,
    HeaderCont,
    BodyCont,
    FooterCont,
    BoxA,
    BoxB,
    BoxC,
    Title,
    Title2,
    Title3,
    Title4,
    SubTitle,
    Descrip,
    Descrip2,
    Links,
    Image
} from '../styles/home.style';


function home() {
  return (
    <MainContainer className="container-fluid">
        <HeaderCont className="container">
            <Title>Gawther Platform</Title>
            <SubTitle>A Place For Everyone ~ By The People ~ For The People</SubTitle>
        </HeaderCont>
        <BodyCont className="container">
          <Title2>Mission Statement</Title2>
          <Descrip id="hidden">
            To provide a judge-free, peaceful place for anyone to feel apart of something bigger.
          </Descrip>
          <Title2>About Gawther</Title2>
          <Descrip2 id="hidden">
            Established in 2019, Gawther was created amongst two best friends with a 
            heart for an adventure of creating a company with the greatest and most 
            cutting-edge technology. The two best friends being Mek and Kata. What started
            off as a conversation at Dunkin Donuts ended up a 2 year long adventure on creating
            the greated, multi-community platform possible.<br/><br/>
            <u>Mek's History View</u><br/>
            "While I was living in philly with Kata, I watched him program a lot which peaked
            my interest. So, I asked him to mentor me. He wanted to start with the basics,
            and to which we did, but it was java...🤮...We then switched to Python which was
            a much easier to understand and learn type language. Although Python is a high-level 
            language, it's a great language for beginners as everything is just as simple as if
            this item doesn't equal this item then do this action. Otherwise do that action.
            if 8 == 8: -&gt; print("8 equals 8") else: -&gt; print("8 does not equal 8"). . .
            It really is that simple! So we set off on our adventure. After a few of going over
            the basics, I started asking about Discord Bots. He said that they were rather simple
            to build, but at the same time were a bit confusing. I thought I knew it all, so I went
            for it! Weeks went by of me begging various members of support discords for help and bugging
            our other friend, Buddha, I eventually started to figure things out and thus became burnt out.
            The first thing about my bot that I had to figure out what the bots' name. ButtlerBot. That was
            it! The goal was to design a discord bot that would eventually do and could do any and everything 
            that a person could need to practically automate their life. In addition, this was going to become
            a legit thing that I would eventually switch over to an actual project for a real, life-size buttler
            robot that would automate your entire in-home living experience. However, that dream eventually
            died, haha. While working with Python and JavaScript for the last few years, I have become much
            better acquainted with the languages themselves as while Python was becoming easier to understand,
            JavaScript was easier to learn as most of the teachings carried over. As for Gawther, it's still
            pretty much ButtlerBot, but Gawther has been more fine tuned towards being an open-ended platform
            that is comprised of various communities all brought together to make one big happy world." -Mek<br/><br/>
            <u>Kata's History View</u><br/>
            "Some View On Gawther's History From kata."
          </Descrip2>
        </BodyCont>
        
        {/* CHECK SYSTEM TO BE INCORPORATED BELOW */}
        <FooterCont className="container">
          {/* Check if user signed in. If not, display the title2 with the anchor tag to sign in. */}
          <Title3>Welcome, <a href="/" target="_blank" rel="noreferrer">Sign In</a> to continue...</Title3>
          {/* If user is signed in, then show these buttons */}
          <BoxA className="container">
            <Image src={profPicOfUser} alt="user profile picture" />
          </BoxA>
          <BoxB className="container">
            <Title3>Mekasu Renae</Title3>
            <Title4>lisenbyscreation@outlook.com</Title4>
          </BoxB>
          <BoxC className="container">
            <Links to="/">My Profile</Links>
            <Links to="/">Change Email</Links>
            <Links to="/">Change Password</Links>
            <Links to="/">Change Profile Picture</Links>
          </BoxC>
        </FooterCont>
    </MainContainer>
  );
}

export default home;