var random = require("random-name");

class TestUtils {
    constructor() {
        this.commentNonsense = new Array(
            "If you really wanted to do that, then why wouldn&#039;t you do that? Instead you do this. It makes no sense.",
            "I can drive 10 miles, walk 50 feet. Turn around and before I know it, I&#039;d be back home. Or would I? I'm not sure but that&#039;s just how it is.",
            "Sometimes I wonder if I really can. But then I think to myself, maybe I can't. But if I could, that would be good. Maybe it&#039;s all a lie?",
            "I see you have something to talk about. Well, I have something to shout about. Infact something to sing about. But I&#039;ll just keep quiet and let you carry on.",
            "If I could I would. Wether or not I should, I still would.",
            "Yo wa gwan blud you rudeboy bludclart.",
            "If I roll once and you roll twice. What does that mean?",
            "From this day on I shall be known as Bob. For Bob is a good name and I am good. But if you want you can just call me Sally.",
            "I like to wax my legs and stick the hair on my back. Why? Because it keeps my back warm. There&#039;s method in my madness.",
            "Look! In the sky. It&#039;s a bird, it's a plane. Or is it a hellicopter? No actually I think it is a bird. Or maybe I&#039;m just seeing things. Who knows... After 10 shots of Whiskey things start to get a bit strange.",
            "I like to say things twice, say things twice. It can get annoying though, annoying though."
        );
    }

    get randomName() {
        return random.first() + " " + random.last();
    }

    get randomComment() {
        var randomIndex = Math.floor(Math.random()*(this.commentNonsense.length));
        return this.commentNonsense[randomIndex];
    }
}

module.exports = TestUtils;
