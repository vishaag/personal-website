---
title: 'I made a Michael Scott Chatbot for Slack'
date: '2020-05-15'
---

![Intro Image](https://dev-to-uploads.s3.amazonaws.com/i/hzlgi9xdh6zkv1try296.png)

<div>
Want the world's best boss on your slack? Click to add the Michael Scott Bot to your Slack Workspace!
<br>
<br>
<a href="https://slack.com/oauth/v2/authorize?client_id=603308697778.1138663588561&scope=channels:history,chat:write,groups:history"><img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"></a>
<br>
</div>
(read <i>Note</i> and <i>Disclaimer</i> at the bottom of the page before installing it to your workspace)


## Who is Michael Scott?
> Michael Gary Scott is a fictional character on NBC's The Office, portrayed by Steve Carell and based on David Brent from the British version of the program. Michael is the central character of the series, serving as the Regional Manager of the Scranton branch of a paper distribution company.  
— Wikipedia

Michael Scott proclaims himself as the world's best boss and is one of my favourite TV characters ever made!
Michael has said a lot of wisdomous things, but his best known quote is probably "That's what she said". It's highly inappropriate, but super fun to watch in the show 😂

I've recently been exploring Dialogflow, and I tried to recreate Michael Scott's funny inappropriateness for a slack workspace. In this article, I'll walkthrough how I configured and trained my dialogflow agent to reply like Michael Scott. No git repos or code needed! Everything done though the websites! 

### Dialogflow
You probably have heard of dialogflow, but for the uninitiated, dialogflow provides an excellent Natural Language Processing engine that takes care of the intent and parameter extraction from sentences. It also allows us to add a web hook that can make use of a backend server to respond dynamically. But we aren't going to use those features here! One of reasons I wanted to write this article was to show how easy it actually is to build a chatbot.

## Getting Started

### Dialogflow Setup

Create an account or login in to [Dialogflow](https://dialogflow.com) and go to your console.

Create a new agent from the left menus and give any name to your bot. After creating, you will see the following screen.

![Step 1](https://dev-to-uploads.s3.amazonaws.com/i/2t6pbk1trapo3vb4z89t.png)

An intent categorizes an end-user's intention for one conversation turn. A Welcome and a Fallback intent (if intent is not detected) is included for us by default.

You can also see an Input box in the right. Try typing a greeting into it like 'Hey' or 'Hello'.

![Step 2](https://dev-to-uploads.s3.amazonaws.com/i/2emgb2h3w1t0iaekoxuz.png)

Ideally, the bot should reply, but we see an error. That's because we need to configure a Google Cloud service Key for Dialogflow. 
To do this, click on the gear icon on the left menus and then click on create service account under the google project as shown below.

![Step 3](https://dev-to-uploads.s3.amazonaws.com/i/arfarv95yssy3xhnmwkc.png)

After doing that step, try typing in the input box again. What do you see?

![Step 4](https://dev-to-uploads.s3.amazonaws.com/i/86onuhv3y2gavt5oq7xr.png)

We see a response! Our bot is actually replying to us. But how does it know what to reply?
It's answering from the pre defined Default Welcome Intent!
Click on Intents from the left menus and go inside the Default Intents.

![Step 5](https://dev-to-uploads.s3.amazonaws.com/i/ru1v5z057c0auny7632w.png)

We can add more phrases to this inorder to make Dialogflow to detect our inputs. We will be adding our phrases here later to detect what Michael Scott Bot will reply.

But how did it reply to us?

![Step 6](https://dev-to-uploads.s3.amazonaws.com/i/d5pztg39cli4342ov3hb.png)

If you scroll down, you can find the Responses section. The bot replies what we write here. We will be adding our Michael Scott GIF here later.

Now, let's create a new Intent by pressing the '+' icon near the Intent item in the left Menus. Name it anything you want, I've named it Misc.

![Step 7](https://dev-to-uploads.s3.amazonaws.com/i/9tyqjmguxf8hhrrws13o.png)

I've added a couple of phrases here which I thought Michael Scott would reply 'That's what she said!'. You can add more here! Get creative 😉

Dialogflow is very intelligent. It doesn't match phrases exactly to what we've given in the training phrases. It learns from the phrases in a deeper way (using complex NLP machine learning techniques), so even if we make a typo or have different sentence structure (but similar), it works!

Now, let's add the response. Scroll down to find the Response section.
Click on the '+' icon next to 'Default' and select Slack.

You can turn off 'Use responses from Default tab as first responses' if you want.

We want to add a GIF. Just go to [GIPHY](https://giphy.com/gifs/the-office-thats-what-she-said-micheal-scott-f8pT7bphqES4M) and copy the GIF's link and paste it for the Image Link

![Step 8](https://dev-to-uploads.s3.amazonaws.com/i/l6mta2b9p126h6d9dt3a.png)

Guess what? We've completed our bot! Now let's integrate with Slack.
Click on Integrations from the left menus and turn on Integration for Slack.

![Step 9](https://dev-to-uploads.s3.amazonaws.com/i/nxeh7ierf6acmhxq9px1.png)

To test the app you can click on 'Test in Slack'. This will integrate your the bot into your workspace for you to test. You can use this as a check to make sure the bot is working.

![Step 10](https://dev-to-uploads.s3.amazonaws.com/i/zf7a5x7h4u0d1yf5s8zk.png)

To launch the app, Dialogflow has already documented the steps to do that (as in the above image), So I'll skip that part. Just follow all the instructions in Launch and you should be good.

Although there are 2 things you would need to configure explicitly which isn't mentioned in the instructions.

In the Events Subscription, add the following events.

![Step 11](https://dev-to-uploads.s3.amazonaws.com/i/c37h0okby4k9j1n7hcg5.png)

The bot will be aware of these events - posting messages in both private and public channels. If you don't want to use the bot in public channels, you can remove that event. 

The second thing to do is, in the 'OAuth & Permissions' sections, provide the bot access to write. This is important since we want the bot to reply.

![Step 12](https://dev-to-uploads.s3.amazonaws.com/i/bdsll8u3pjbvu1ahmdgk.png)

Now, go to 'Install App' and install it to your workspace!
We are DONE! We can now have Michael Scott Bot in our Slack Workspace.
Invite Michael Scott Bot and have fun! 🤪

![Demo GIF](https://dev-to-uploads.s3.amazonaws.com/i/bnf9f0uw4t6wvxn6vynl.gif)

If you just want to try bot, you can add my Michael Scott Bot to your Slack Workspace.

<div>
<a href="https://slack.com/oauth/v2/authorize?client_id=603308697778.1138663588561&scope=channels:history,chat:write,groups:history"><img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"></a>
</div>

<i>Pro Tip - How I added Phrases to my Michael Scott Bot:
Adding phrases one by one can be time consuming. Instead, I obtained the transcript of the following video - https://youtu.be/dBUGfs9rwms and added the phrases before Michael Says 'That's what she said'!</i>

<i>I used <a href="https://zapier.com/zappy">Zappy</a> to take and edit the screen shots.</i>

<i>Note: if you do add my bot to your workspace, your chats will be using my Dialogflow service. I've turned off the chat logging in my Dialogflow settings, but still, I recommend you to create a new channel if you try my bot. Please DO NOT share any confidential information in the channel you've added the bot to.</i>

<i>Disclaimer: I made this for educational and entertainment reasons ONLY. I do not represent Michael Scott or The Office Series. Please make sure you inform people what the bot is about. The bot could be inappropriate in office slack workspaces due to it's nature.</i>

Last of all, have fun 🤗 tweet with <a href="https://twitter.com/hashtag/michaelScottBot">#michaelScottBot<a>




  



                            
