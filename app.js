const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
const Discord = require("discord.js");
const bot = new Discord.Client();
const axios = require('axios')
const { MessageEmbed } = require("discord.js");

require("dotenv").config();
const fetch = require("node-fetch");
const dotenv = require("dotenv");
const ms = require("ms");
const googleIt = require('google-it')
const smartestchatbot = require('smartestchatbot')
const scb = new smartestchatbot.Client();
const Math = require('math.js');

// const randomanime = require('random-anime');
const request = require("request");
const ButtonPages = require("discord-button-pages");
const delay = require('delay');
const ytsr = require('ytsr')
const got = require('got');
const { MessageButton, MessageActionRow, createMessageComponentCollector } = require("discord-buttons");
const disbut = require("discord-buttons");

// Import Quotes and images
const Quote = require('./src/quote.js')
const Image = require('./src/image')


disbut(bot);

const wait = require('util').promisify(setTimeout);
const moment = require('moment');
const Request = require('node-superfetch');

bot.commands = new Discord.Collection();
const db = require('quick.db');
const format = require(`humanize-duration`);
const map = new Discord.Collection();

const fs = require("fs");

const config = require("./auth.json")
const { prefix } = require("./auth.json");
const { image } = require('discord-botkit');


bot.on('ready', () => {

  console.log('Zyn initialized!');
  const servers = bot.guilds.cache.size
  const users = bot.users.cache.size

  console.log(`Bot is now online and serving in ${servers} servers`)
  //This will display "Playing in <servers> servers!"

  bot.user.setActivity(`+help`, {
    type: 'PLAYING',
  })
});



function doMagic8BallVoodoo() {
  var rand = [':8ball: Absolutly.', ':8ball: Absolutly not.', ':8ball: It is true.', ':8ball: Impossible.', ':8ball: Of course.', ':8ball: I do not think so.', ':8ball: It is true.', ':8ball: It is not true.', ':8ball: I am very undoubtful of that.', ':8ball: I am very doubtful of that.', ':8ball: Sources point to no.', ':8ball: Theories prove it.', ':8ball: Reply hazy try again', ':8ball: Ask again later', ':8ball: Better not tell you now', ':8ball: Cannot predict now', ':8ball: Concentrate and ask again', ':8ball: LMFAO not even in dreams', ':8ball: hahaha You are dumb', ':8ball:You dont have grey matter jackass', ':8ball: Lets see whats in your fortune today dumbass !', ':8ball: Ahh atleast not today', ':8ball: Never ever'];

  return rand[Math.floor(Math.random() * rand.length)];
}



function coinToss() {
  var rand = ['You flipped the coin, it lands on tails.', 'I flipped the coin, it lands on tails.', 'You flipped the coin, it lands on heads.', 'I flipped the coin, it lands on heads.'];
  return rand[Math.floor(Math.random() * rand.length)];
}
function Roast() {
  var rand = ['Accept it Nikhil is so pro'];
  return rand[Math.floor(Math.random() * rand.length)];
}
function parseMilliseconds(milliseconds) {
  if (typeof milliseconds !== 'number') {
    throw new TypeError('Expected a number');
  }

  const roundTowardsZero = milliseconds > 0 ? Math.floor : Math.ceil;

  return {
    days: roundTowardsZero(milliseconds / 86400000),
    hours: roundTowardsZero(milliseconds / 3600000) % 24,
    minutes: roundTowardsZero(milliseconds / 60000) % 60,
    seconds: roundTowardsZero(milliseconds / 1000) % 60,
    milliseconds: roundTowardsZero(milliseconds) % 1000,
    microseconds: roundTowardsZero(milliseconds * 1000) % 1000,
    nanoseconds: roundTowardsZero(milliseconds * 1e6) % 1000
  };
}
bot.on('clickButton', (button) => {
  const message = button.message;
  if (button.id === "button1") {
    const embed1 = new Discord.MessageEmbed()
      .setTitle("😆Fun Commands")
      .setColor("#B3346C")
      .setDescription("`ping              - Shows if bot is online or not `,\n`google[content]   - fetch 9-10top results from google e.g. !google alan\n                     walker songs, true`,\n`say               - Whatever you ask it  `,\n `8ball             - Starts 8ball`,\n`meme              - shows you random meme`\n`server            - shows server info`,\n`info              - Shows info of user`,\n`quote             - Sends a random quote`,\n`weather[cityname] - shows weather of a city e.g. !weather london, true`,\n `avatar            - Shows you the avatar`,\n`fakevirus         - Send a virus to mentioned user`")
    message.edit({ embed: embed1 })
  }

  else if (button.id === "button2") {
    const embed3 = new Discord.MessageEmbed()
      .setTitle("🔨Moderation Commands")
      .setColor("#B3346C")
      .setDescription("`kick              - kicks the user from server`,\n `ban               - bans a user from server`,\n `purge             - clears the given amount of messages`,\n `private[#channel] - make channel private`,\n `lock              - locks a channel e.g. zyn-lock[#channel], true`,\n `unlock            - unlocks the channel`")
    message.edit({ embed: embed3 })
  }


  else if (button.id === "normal") {
    const quotes = Quote.quotes
    let object = Object.keys(quotes)
    let randomQuote = Math.floor(Math.random() * object.length)

    let quote = quotes[randomQuote]

    const embed = new Discord.MessageEmbed()
      .setAuthor(`📜 Quote `)
      .setColor('#FF00A6')
      .setDescription(`${quote}`)
    message.edit({ embed: embed });
  }

  button.reply.defer();
});

bot.on('message', msg => {

  if (!msg.content.startsWith(config.prefix)) return;
  if (msg.channel.type == "dm") return;
  if (msg.author.bot) return;


  let command = msg.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  console.log(command);


  let args = msg.content.split(" ").slice(1);

  if (command === "aliases") {

    let embed = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle("Here is a list of aliases of commands!")

      .setDescription("1. 8ball<8b> \n 2.weather[cityname]<w[cityname]> \n 3.avatar<av>\n 4.google<g>\n 5.fakevirus<fv>")
    msg.channel.send(embed)


  }
  else if (command === "avatar" || command === "av") {
    if (msg.mentions.users.size) {
      let member = msg.mentions.users.first()
      if (member) {
        let embed = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setAuthor(member.tag, member.displayAvatarURL())
          .setDescription(`[Avatar URL Link](${member.displayAvatarURL()})`)
          .setImage(member.displayAvatarURL())


        msg.channel.send(embed)

      }
    }
    else {
      let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
        .setDescription(`[Avatar URL Link](${msg.author.displayAvatarURL()})`)
        .setImage(msg.author.displayAvatarURL({ dynamic: true }))
      msg.channel.send(embed)
    }
  }

  else if (command === "sc") {
    let servers = bot.guilds.cache.size
    let users = bot.users.cache.size

    msg.channel.send(`Bot is now online and serving in ${servers} servers`)
  }
  else if (command === "say") {
    msg.delete();
    msg.channel.send(args.join(" "));
  }

  else if (command === "ping") {
    msg.channel.send("Pong! (hold on, processing latency...)").then(m => m.edit(`Pong! (Current latency is ${m.createdTimestamp - msg.createdTimestamp}ms, while the API Latency is ${Math.round(bot.ping)}ms)`));
  }

  else if (command === "pong") {
    msg.channel.send("Ping! (hold on, processing latency...)").then(m => m.edit(`Ping! (Current latency is ${m.createdTimestamp - msg.createdTimestamp}ms, while the API Latency is ${Math.round(bot.ping)}ms)`));

  }



  else if (command === "angry") {
    const imagesAngry = Image.imagesAngry
    let member = msg.mentions.users.first();
    const randomImage = imagesAngry[Math.floor(Math.random() * imagesAngry.length)];
    if (member) {
      let embed = new Discord.MessageEmbed()
        .setTitle(`Watch out ${member.username} maybe ${msg.author.username} is angry! 🤬`)
        .setColor('#8b0000')
        .setImage(randomImage)
        .setTimestamp()
      msg.channel.send(embed);
    } else {
      msg.channel.send('❌ | Tag a user and get angry on him ');
    }
  }
  else if (command === "blush") {
    const imagesBlush = Image.imagesBlush
    let member = msg.mentions.users.first();
    const randomImage = imagesBlush[Math.floor(Math.random() * imagesBlush.length)];
    if (member) {
      let embed = new Discord.MessageEmbed()
        .setTitle(`${msg.author.username} blushed at ${member.username} 😳`)
        .setColor('#11ff99')
        .setImage(randomImage)
        .setTimestamp()
      msg.channel.send(embed);
    } else {
      msg.channel.send('❌ | On whom you are blushing at <:TomStare:853276994350350377>');
    }
  }
  else if (command === "pout") {

    const imagesPout = Image.imagesPout
    let member = msg.mentions.users.first();
    const randomImage = imagesPout[Math.floor(Math.random() * imagesPout.length)];
    if (member) {
      let embed = new Discord.MessageEmbed()
        .setTitle(`${msg.author.username} seems to pouts at ${member.username} 🥺`)
        .setColor('#f582ae')
        .setImage(randomImage)
        .setTimestamp()
      msg.channel.send(embed);
    }
    else {
      msg.channel.send('❌ | Tag someone to show your crocodile tears 🥱');
    }
  }
  else if (command === "pat") {
    const imagesPat = Image.imagesPat
    let member = msg.mentions.users.first();
    const randomImage = imagesPat[Math.floor(Math.random() * imagesPat.length)];
    if (member) {
      let embed = new Discord.MessageEmbed()
        .setTitle(`Aww ${msg.author.username} patted ${member.username}! 😚`)
        .setColor('#8a2be2')
        .setImage(randomImage)
        .setTimestamp()
      msg.channel.send(embed);
    } else {
      msg.channel.send('❌ | Please specify someone');
    }
  }
  else if (command === "slap") {
    const imagesSlap = Image.imagesSlap
    let member = msg.mentions.users.first();
    const randomImage = imagesSlap[Math.floor(Math.random() * imagesSlap.length)];
    if (member) {
      let embed = new Discord.MessageEmbed()
        .setTitle(`Ouch ${msg.author.username} slapped ${member.username}! 😣`)
        .setColor('#F39C12')
        .setImage(randomImage)
        .setTimestamp()
      msg.channel.send(embed);
    } else {
      msg.channel.send('❌ | Ok you got slapped by your partner. Now tag a user moron.');
    }
  }


  else if (command === "8ball" || command === "8b") {
    msg.channel.send(doMagic8BallVoodoo())
  }


  else if (command === "kiss") {
    let member = msg.mentions.users.first();
    const imagesKiss = Image.imagesKiss
    const randomImage = imagesKiss[Math.floor(Math.random() * imagesKiss.length)];
    if (member) {
      let embed = new Discord.MessageEmbed()
        .setTitle(`${msg.author.username} kissed ${member.username}! 😍`)
        .setColor('#8E44AD')
        .setImage(randomImage)
        .setTimestamp()
      msg.channel.send(embed);
    } else {
      msg.channel.send('❌ | You kissing air dumbo!! Tag someone.');
    }
  }
  else if (command === "punch") {
    const imagesPunch = Image.imagesPunch
    let member = msg.mentions.users.first();
    const randomImage = imagesPunch[Math.floor(Math.random() * imagesPunch.length)];
    if (member) {
      let embed = new Discord.MessageEmbed()
        .setTitle(`${msg.author.username} punched ${member.username}! 😡`)
        .setColor('#9bddff')
        .setImage(randomImage)
        .setTimestamp()
      msg.channel.send(embed);
    } else {
      msg.channel.send('❌ | Please specify someone');
    }
  }
  else if (command === "hug") {

    const imagesHug = Image.imagesHug
    let member = msg.mentions.users.first();
    let randomImage = imagesHug[Math.floor(Math.random() * imagesHug.length)];
    if (member) {
      let embed = new Discord.MessageEmbed()
        .setTitle(`${msg.author.username} hugs ${member.username}! 🥰`)
        .setColor('#4CAF50')
        .setImage(randomImage)
        .setTimestamp()
      msg.channel.send(embed);
    } else {
      msg.channel.send('❌ | Who are you hugging jackass?');
    }
  }

  else if (command === "cointoss") {
    msg.channel.send(coinToss())
  }
  else if (command === "roast") {
    let targetMember = msg.mentions.members.first();
    if (!targetMember) return msg.reply('Ok you have more dicks in your head. Now tag a user dumbass.');
    msg.channel.send(Roast())
  }

  else if (command === "server") {

    let roles = msg.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.name);
    let members = msg.guild.members.cache;
    let channels = msg.guild.channels.cache;
    let embed = new Discord.MessageEmbed()
      .setTitle(`Server Information - ${msg.guild.name}`)
      .setThumbnail(msg.guild.iconURL())
      .setColor('#117791')
      .addField("<a:flame:914448780122783754> General Information", [
        `• **Name**: ${msg.guild.name}`,
        `• **Server ID**: ${msg.guild.id}`,
        `• **Owner**: <@${msg.guild.ownerID}>`,
        `• **Server Created**: ${moment(msg.guild.createdTimestamp).format('LL LTS')}`,
      ])
      .addField('<a:flame:914448780122783754> Member Information', [
        `• **Users**: ${msg.guild.memberCount}`,
        `• **Bots**: ${members.filter(m => m.user.bot).size}`,
      ])

      .addField('<a:flame:914448780122783754> Channel Information', [
        `• **Channels**: ${msg.guild.channels.cache.size}`,
        `• **Text Channels**: ${channels.filter(ch => ch.type === "text").size}`,
        `• **Voice Channels**: ${channels.filter(ch => ch.type === "voice").size}`,
      ])


    msg.channel.send(embed)
  }
  else if (command === "info") {
    const user = msg.mentions.users.first() || msg.author;
    const member = msg.guild.members.cache.get(user.id);
    let embed = new Discord.MessageEmbed()
      .setTitle(`User Information - ${user.username}`)
      .setThumbnail(user.displayAvatarURL({ dynamic: true }))
      .setColor('#660077')
      .addField("<a:loading:914450825458380810> Informations", [
        `• **Name**: ${user.tag}`,
        `• **User ID**: ${user.id}`,
        `• **Nickname**: ${member.nickname || 'None'}`,
        `• **Is Bot**: ${user.bot}`,
        `• **Created At**: ${moment(member.user.createdTimestamp).format('LL LTS')}`,
        `• **Joined At**: ${moment(member.joinedAt).format('LL LTS')}`,
      ])
    msg.channel.send(embed)
  }

  else if (command === "uptime") {
    let channel = msg.channel;
    msg.delete();

    let totalSeconds = (bot.uptime / 1000);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);

    let uptimeEmbed = new Discord.MessageEmbed()
      .setDescription(`${bot.user.username} Bot Uptime`)
      .setColor("#e56b00")
      .addField("Hours", hours)
      .addField("Minutes", minutes)
      .setTimestamp()
      .setFooter(`Lavet`)

    channel.send(uptimeEmbed).then(msg => msg.delete({ timeout: 5000 })).catch(console.error);
  }


  else if (command === "purge") {
    const amount = msg.content.split(" ")[1];
    if (!amount) {
      msg.reply(`<amount>`);
      return;
    }
    if (!msg.member.hasPermission("MANAGE_MESSAGES")) {
      msg.channel.send('You have no permissions to do that');
      return;
    }
    msg.channel.bulkDelete(amount).catch(err => {
      console.error(err);
      msg.channel.send('You can only delete messages for less than 14 days');
    });


  }

  else if (command === "ban") {

    if (!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.send('You can\'t use that!')
    if (!msg.guild.me.hasPermission("BAN_MEMBERS")) return msg.channel.send('I don\'t have the right permissions.')
    const member = msg.mentions.members.first()


    if (!args[0]) return msg.channel.send('Please specify a user');

    if (!member) return msg.channel.send('Can\'t seem to find this user. Sorry \'bout that :/');
    if (!member.bannable) return msg.channel.send('❌This user can\'t be banned. It is either because they are a mod/admin, or their role is higher than mine.');

    if (member.id === msg.author.id) return msg.channel.send('Bruh, you can\'t ban yourself!');

    let reason = args.slice(1).join(" ");

    if (!reason) reason = 'Unspecified';

    member.ban({ reason: 'your reason here' }).catch(err => {
      msg.channel.send('Something went wrong')
      console.log(err)
    })
    let banembed = new Discord.MessageEmbed()
      .setTitle('<a:ban:914445759091453992> Member banned')
      .setThumbnail(member.user.displayAvatarURL())
      .addField('User Banned', member)
      .addField('Kicked by', msg.author)
      .addField('Reason', reason)
      .setFooter('Time kicked', bot.user.displayAvatarURL())
      .setTimestamp()
      .setColor("#323296")
    msg.channel.send(banembed);


  }

  else if (command === "kick") {
    const member = msg.mentions.members.first()
    if (!msg.member.hasPermission('KICK_MEMBERS')) {
      msg.channel.send('You don\'t permissions to do that');
      return;
    }
    let mentionMember = msg.mentions.members.first();
    //If user dont mention a member, that show him this error msg
    if (!mentionMember) {
      msg.channel.send('Whom you are kicking dumbass!!Mention someone.');
      return;
    }
    if (!mentionMember.kickable) {
      msg.channel.send('❌This user can\'t be kicked. It is either because they are a mod/admin, or their role is higher than mine');
      return;
    }
    if (member.id === msg.author.id) return msg.channel.send('Bruh, you can\'t kick yourself!');

    let reason = args.slice(1).join(" ");

    if (!reason) reason = 'Unspecified';

    member.kick({ reason: 'your reason here' }).catch(err => {
      msg.channel.send('Something went wrong')
      console.log(err)
    })
    let kickembed = new Discord.MessageEmbed()
      .setTitle('<:fired:914445759229866015> Member kicked')
      .setThumbnail(member.user.displayAvatarURL())
      .addField('User Kicked', member)
      .addField('Kicked by', msg.author)
      .addField('Reason', reason)
      .setFooter('Time kicked', bot.user.displayAvatarURL())
      .setTimestamp()
      .setColor("#323296")
    msg.channel.send(kickembed);


  }
  else if (command === "private") {
    const channel =
      bot.channels.cache.find(
        (channel) => channel.name == `#${args.slice(0).join('-')}`
      ) || bot.channels.cache.get(args[0].match(/<#(\d+)>/)[1]);
    if (!msg.member.hasPermission('MANAGE_CHANNELS')) {
      msg.channel.send('You don\'t permissions to do that!!');
      return;
    }
    if (!channel) {
      console.log(channel);
      return msg.reply('Please provide a channel name/id!');
    }



    if (!channel.permissionsFor(msg.guild.roles.everyone).has('VIEW_CHANNEL')) {
      const errorEmbed = new Discord.MessageEmbed()
        .setDescription(
          `❌ \`VIEW_CHANNEL\` for \`${channel.name}\` is already disabled.`
        )
        .setColor('RED');
      return msg.channel.send(errorEmbed);
    }
    channel
      .updateOverwrite(channel.guild.roles.everyone, { VIEW_CHANNEL: false })
      .then(() => {
        const msgEmbed = new Discord.MessageEmbed()
          .setDescription(`<a:tick:914447808843644948> The channel\`${channel.name}\` has been set to private.`)
          .setColor('GREEN');
        msg.channel.send(msgEmbed);
      })
      .catch((error) => {
        console.log(error);
        const errorEmbed = new Discord.MessageEmbed()
          .setDescription(`❌ Unable to lock \`${channel.name}\`.`)
          .setColor('RED');
        msg.channel.send(errorEmbed);
      });
  }
  else if (command === "lock") {
    const channel =
      bot.channels.cache.find(
        (channel) => channel.name == `#${args.slice(0).join('-')}`
      ) || bot.channels.cache.get(args[0].match(/<#(\d+)>/)[1]);
    if (!msg.member.hasPermission('MANAGE_CHANNELS')) {
      msg.channel.send('You don\'t permissions to do that!!');
      return;
    }
    if (!channel) {
      console.log(channel);
      return msg.reply('Please provide a channel name/id!');
    }



    if (!channel.permissionsFor(msg.guild.roles.everyone).has('SEND_MESSAGES')) {
      const errorEmbed = new Discord.MessageEmbed()
        .setDescription(
          `❌ \`SEND_MESSAGES\` for \`${channel.name}\` is already disabled.`
        )
        .setColor('RED');
      return msg.channel.send(errorEmbed);
    }
    channel
      .updateOverwrite(channel.guild.roles.everyone, { SEND_MESSAGES: false })
      .then(() => {
        const msgEmbed = new Discord.MessageEmbed()
          .setDescription(`🔒 The channel\`${channel.name}\` has been locked.`)
          .setColor('GREEN');
        msg.channel.send(msgEmbed);
      })
      .catch((error) => {
        console.log(error);
        const errorEmbed = new Discord.MessageEmbed()
          .setDescription(`❌ Unable to lock \`${channel.name}\`.`)
          .setColor('RED');
        msg.channel.send(errorEmbed);
      });
  }
  else if (command === "unlock") {
    const channel =
      bot.channels.cache.find(
        (channel) => channel.name == `#${args.slice(0).join('-')}`
      ) || bot.channels.cache.get(args[0].match(/<#(\d+)>/)[1]);
    if (!msg.member.hasPermission('MANAGE_CHANNELS')) {
      msg.channel.send('You don\'t permissions to do that!!');
      return;
    }
    if (!channel) {
      console.log(channel);
      return msg.reply('Please provide a channel name/id!');
    }




    channel
      .updateOverwrite(channel.guild.roles.everyone, { SEND_MESSAGES: true })
      .then(() => {
        const msgEmbed = new Discord.MessageEmbed()
          .setDescription(`🔓 The channel\`${channel.name}\` has been unlocked.`)
          .setColor('GREEN');
        msg.channel.send(msgEmbed);
      })
      .catch((error) => {
        console.log(error);
        const errorEmbed = new Discord.MessageEmbed()
          .setDescription(`❌ Unable to unlock \`${channel.name}\`.`)
          .setColor('RED');
        msg.channel.send(errorEmbed);
      });
  }
  else if (command === "howgay") {
    let member = msg.mentions.users.first();

    let random = Math.floor(Math.random() * 101);

    if (member) {
      const embed = new Discord.MessageEmbed()
        .setTitle('Results')
        .setDescription(`${member.username} is ${random}% gay <a:gay:914451425612943382>`)
        .setColor('#FF00A6')

      msg.channel.send(embed);
    } else {
      const embed = new Discord.MessageEmbed()
        .setTitle('Results')
        .setDescription(`${msg.author.username} is ${random}% gay <a:gay:914451425612943382>`)
        .setColor('#FF00A6')
      msg.channel.send(embed);
    }
  }
  else if (command === "ranime") {

    let anime = randomanime.anime()
    let member = msg.author;

    const embed = new Discord.MessageEmbed()
      .setTitle(`Image for ${member.username}`)
      .setImage(anime)
      .setColor("RANDOM")

    msg.channel.send(embed);
  }


  else if (command === "weather" || command === "w") {
    const exampleEmbed = (
      temp,
      maxTemp,
      minTemp,
      pressure,
      humidity,
      wind,
      cloudness,
      icon,
      author,
      profile,
      cityName,
      country
    ) =>
      new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(`Hello, ${author}`, profile)
        .setTitle(`There is ${temp}\u00B0 C in ${cityName}, ${country}`)
        .addField(`Maximum Temperature:`, `${maxTemp}\u00B0 C`, true)
        .addField(`Minimum Temperature:`, `${minTemp}\u00B0 C`, true)
        .addField(`Humidity:`, `${humidity} %`, true)
        .addField(`Wind Speed:`, `${wind} m/s`, true)
        .addField(`Pressure:`, `${pressure} hpa`, true)
        .addField(`Cloudiness:`, `${cloudness}`, true)
        .setThumbnail(`http://openweathermap.org/img/w/${icon}.png`)

        .setFooter('Enjoy!!');
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=${process.env.API_TOKEN}`
      )
      .then(response => {
        let apiData = response;
        let currentTemp = Math.ceil(apiData.data.main.temp)
        let maxTemp = apiData.data.main.temp_max;
        let minTemp = apiData.data.main.temp_min;
        let humidity = apiData.data.main.humidity;
        let wind = apiData.data.wind.speed;
        let author = msg.author.username
        let profile = msg.author.displayAvatarURL
        let icon = apiData.data.weather[0].icon
        let cityName = args
        let country = apiData.data.sys.country
        let pressure = apiData.data.main.pressure;
        let cloudness = apiData.data.weather[0].description;
        msg.channel.send(exampleEmbed(currentTemp, maxTemp, minTemp, pressure, humidity, wind, cloudness, icon, author, profile, cityName, country));
      }).catch(err => {
        msg.react('😪')




      })
  }

  else if (command === "help") {
    const embed = new Discord.MessageEmbed()
      .setAuthor(msg.author.tag)
      .setTitle("Thankyou for using help command.")
      .setColor("RED")
      .setDescription("Click on any of the category given below to view its commands.\n **Note**- Use '+' as prefix and all the commands are case sensitive")

    const button1 = new disbut.MessageButton()
      .setStyle('green')
      .setLabel("Fun")
      .setID("button1")

    const button2 = new disbut.MessageButton()
      .setStyle('green')
      .setLabel("Moderation")
      .setID("button2")

    let row = new disbut.MessageActionRow()
      .addComponents(button1, button2);
    msg.channel.send(null, { embed: embed, components: [row] }).then(msg => {
      setTimeout(function () {
        msg.edit(null, { embed: embed, components: [] })
      }, 120000);
    })

  }


  else if (command === "quote") {

    const quotes = ["If you love life, don’t waste time, for time is what life is made up of. - Bruce Lee",
      "Where is my watch? - Salvador Dali",
      "Use time sparingly. - Chilon of Sparta",
      "What is true, is true only for one time and only for one place. - T.S. Eliot",
      "Whatever is done well enough is done quickly enough. - Augustus",
      "It's not worth doing something unless you were doing something that someone, somewhere, would much rather you weren't doing. - Terry Pratchett",
      "What is said is done. - Latin phrase",
      "Each man delights in the work that suits him best. - Homer",
      "You don't have to talk about what you're doing beforehand. This will be seen anyway. - Marcus Aurelius",
      "Beginnings are usually scary, and endings are usually sad, but its everything in between that makes it all worth living. - Bob Marley",
      "Good things are difficult. - Ancient Greek phrase",
      "I came, I saw, I won. - Julius Caesar",
      "In most cases men willingly believe what they wish. - Julius Caesar",
      "Give me a museum and I'll fill it. - Pablo Picasso"
    ]
    let object = Object.keys(quotes)
    let randomQuote = Math.floor(Math.random() * object.length)

    let quote = quotes[randomQuote]

    const embed = new Discord.MessageEmbed()
      .setAuthor(msg.author.tag)
      .setTitle("📜 Quotes")
      .setColor("#8FBC8F")
      .setDescription("**Normal**- Gives you normal quote. \n **Anime** - Give quotes by anime characters.")
    const embed1 = new Discord.MessageEmbed()
      .setAuthor(msg.author.tag)
      .setTitle("Thankyou for using quote command")
      .setColor("#8FBC8F")
      .setDescription(`${quote}`)
    const normal = new disbut.MessageButton()
      .setStyle('green')
      .setLabel("Normal")
      .setID("normal")

    const anime = new disbut.MessageButton()
      .setStyle('green')
      .setLabel("Anime")
      .setID("anime")

    let row = new disbut.MessageActionRow()
      .addComponents(normal, anime);


    msg.channel.send(null, { embed: embed, components: [row] }).then(msg => {
      setTimeout(function () {
        msg.edit(null, { embed: embed1, components: [] })
      }, 10000);


    })
  }

  else if (command === "meme") {
    const embed = new Discord.MessageEmbed();
    got('https://www.reddit.com/r/programmingmemes/.json')
      .then(response => {
        const [list] = JSON.parse(response.body);
        const [post] = list.data.children;

        const permalink = post.data.permalink;
        const memeUrl = `https://reddit.com${permalink}`;
        const memeImage = post.data.url;
        const memeTitle = post.data.title;
        const memeUpvotes = post.data.ups;
        const memeNumComments = post.data.num_comments;

        embed.setTitle(`${memeTitle}`);
        embed.setURL(`${memeUrl}`);
        embed.setColor('RANDOM');
        embed.setImage(memeImage);
        embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments}`);



        msg.channel.send(embed)
      })
      .catch(console.error);


  }


  else if (command === "google" || command === "g") {
    const embed = new Discord.MessageEmbed()
      .setTitle("<a:google:914452617915138058> Here are some search results. <a:google:914452617915138058>")
      .setColor("#000000")
      .setTimestamp()
    googleIt({ 'query': args.join(' ') }).then(results => {
      results.forEach(function (item, index) {
        embed.addField((index + 1) + ": " + item.title, "<" + item.link + ">");
      })
      msg.channel.send(embed);
    }).catch(e => {
      // any possible errors that might have occurred (like no Internet connection)
    })
  }


  else if (command === "fakevirus" || command === "fv") {
    let virusname = args.join(' ');
    if (virusname < 1) {
      return msg.channel.send('Please type in a name for the virus')
    }
    msg.channel.send({
      embed: new Discord.MessageEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)
    }).then(msg => {
      setTimeout(function () {
        msg.edit({
          embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] - 1%').setColor(0xFF0000)
        })
      }, 1000)
      setTimeout(function () {
        msg.edit({
          embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] / 2%').setColor(0xFF0000)
        })
      }, 2000)
      setTimeout(function () {
        msg.edit({
          embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] - 2%').setColor(0xFF0000)
        })
      }, 3000)
      setTimeout(function () {
        msg.edit({
          embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] \ 2%').setColor(0xFF0000)
        })
      }, 4000)
      setTimeout(function () {
        msg.edit({
          embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓ ] - 28%').setColor(0xFF0000)
        })
      }, 5000)
      setTimeout(function () {
        msg.edit({
          embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓ ] / 28%').setColor(0xFF0000)
        })
      }, 6000)


      setTimeout(function () {
        msg.edit({
          embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓ ] - 78%').setColor(0xFF0000)
        })
      }, 7000)
      setTimeout(function () {
        msg.edit({
          embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓ ] \ 78%').setColor(0xFF0000)
        })
      }, 8000)
      setTimeout(function () {
        msg.edit({
          embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓ ] - 78%').setColor(0xFF0000)
        })
      }, 9000)

      setTimeout(function () {
        msg.edit({
          embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓ ] / 96%').setColor(0xFF0000)
        })
      }, 10000)
      setTimeout(function () {
        msg.edit({
          embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] - 96%').setColor(0xFF0000)
        })
      }, 11000)
      setTimeout(function () {
        msg.edit({
          embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] \ 96%').setColor(0xFF0000)
        })
      }, 12000)
      setTimeout(function () {
        msg.edit({
          embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] - 96%').setColor(0xFF0000)
        })
      }, 13000)
      setTimeout(function () {
        msg.edit({
          embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] / 96%').setColor(0xFF0000)
        })
      }, 14000)

      setTimeout(function () {
        msg.edit({
          embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] - 99%').setColor(0xFF0000)
        })
      }, 15000)
      setTimeout(function () {
        msg.edit({
          embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 96%').setColor(0xFF0000)
        })
      }, 16000)


      setTimeout(function () {
        msg.edit({
          embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] - 100%').setColor(0xFF0000)
        })
      }, 17000)
      setTimeout(function () {
        msg.edit({
          embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Stealing Token...').setColor(0xFF0000)
        })
      }, 19000)
      setTimeout(function () {
        msg.edit({
          embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Uploading Token to sql://localhost:8080/encrypted_' + virusname + ".key").setColor(0xFF0000)
        })
      }, 22000)
      setTimeout(function () {
        msg.edit({
          embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 5...').setColor(0xFF0000)
        })
      }, 25000)
      setTimeout(function () {
        msg.edit({
          embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 4...').setColor(0xFF0000)
        })
      }, 26000)
      setTimeout(function () {
        msg.edit({
          embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 3...').setColor(0xFF0000)
        })
      }, 27000)
      setTimeout(function () {
        msg.edit({
          embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 2...').setColor(0xFF0000)
        })
      }, 28000)
      setTimeout(function () {
        msg.edit({
          embed: new Discord.MessageEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 1...').setColor(0xFF0000)
        })
      }, 29000)
      setTimeout(function () {
        msg.edit(':boom: :boom: :boom: :boom: :boom: :boom: :boom: :boom: :boom:')
      }, 30000)

    }).catch(console.error)

  }


});




bot.login(process.env.TOKEN);
