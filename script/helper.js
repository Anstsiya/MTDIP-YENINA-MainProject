function zodiacList () {
    return [
        {name: "AQUARIUS", firstDate: {date: 20 , month: 1}, lastDate: {date: 18 , month: 2}},
        {name: "PISCES", firstDate: {date: 19 , month: 2}, lastDate: {date: 20 , month: 3}},
        {name: "ARIES", firstDate: {date: 21 , month: 3}, lastDate: {date: 19 , month: 4}},
        {name: "TAURUS", firstDate: {date: 20 , month: 4}, lastDate: {date: 20 , month: 5}},
        {name: "GEMINI", firstDate: {date: 21 , month: 5}, lastDate: {date: 20 , month: 6}},
        {name: "CANCER", firstDate: {date: 21 , month: 6}, lastDate: {date: 22 , month: 7}},
        {name: "LEO", firstDate: {date: 23 , month: 7}, lastDate: {date: 22 , month: 8}},
        {name: "VIRGO", firstDate: {date: 23 , month: 8}, lastDate: {date: 22 , month: 9}},
        {name: "LIBRA", firstDate: {date: 23 , month: 9}, lastDate: {date: 22 , month: 10}},
        {name: "SCORPIO", firstDate: {date: 23 , month: 10}, lastDate: {date: 21 , month: 11}},
        {name: "SAGITTARIUS", firstDate: {date: 22, month: 11}, lastDate: {date: 21 , month: 12}},
        {name: "CAPRICORN", firstDate: {date: 22 , month: 12}, lastDate: {date: 19 , month: 1}},
    ]
};

function characteristics () {
    return {
        AQUARIUS: { date: "January 20 - February 18", info: {
            strengths : "Progressive, original, independent, humanitarian", 
            weaknesses: "Runs from emotional expression, temperamental, uncompromising, aloof", 
            likes: "Fun with friends, helping others, fighting for causes, intellectual conversation, a good listener", 
            dislikes: "Limitations, broken promises, being lonely, dull or boring situations, people who disagree with them"}} ,
        PISCES: { date: "February 19 - March 20", info: {
            strengths : "Compassionate, artistic, intuitive, gentle, wise, musical", 
            weaknesses: "Fearful, overly trusting, sad, desire to escape reality, can be a victim or a martyr", 
            likes: "Being alone, sleeping, music, romance, visual media, swimming, spiritual themes", 
            dislikes: "Know-it-all, being criticized, the past coming back to haunt, cruelty of any kind"}} ,
        ARIES: { date: "March 21 - April 19", info: {
            strengths : "Courageous, determined, confident, enthusiastic, optimistic, honest, passionate", 
            weaknesses: "Impatient, moody, short-tempered, impulsive, aggressive", 
            likes: "Comfortable clothes, taking on leadership roles, physical challenges, individual sports", 
            dislikes: "Inactivity, delays, work that does not use one's talents"}} ,
        TAURUS: { date: "April 20 - May 20", info: {
            strengths : "Reliable, patient, practical, devoted, responsible, stable", 
            weaknesses: "Stubborn, possessive, uncompromising", 
            likes: "Gardening, cooking, music, romance, high quality clothes, working with hands", 
            dislikes: "Sudden changes, complications, insecurity of any kind, synthetic fabrics"}} ,
        GEMINI: { date: "May 21 - June 20", info: {
            strengths : "Gentle, affectionate, curious, adaptable, ability to learn quickly and exchange ideas", 
            weaknesses: "Nervous, inconsistent, indecisive", 
            likes: "Music, books, magazines, chats with nearly anyone, short trips around the town", 
            dislikes: "Being alone, being confined, repetition and routine"}} ,
        CANCER:{ date: "June 21 - July 22", info: {
            strengths : "Tenacious, highly imaginative, loyal, emotional, sympathetic, persuasive", 
            weaknesses: "Moody, pessimistic, suspicious, manipulative, insecure", 
            likes: "Art, home-based hobbies, relaxing near or in water, helping loved ones, a good meal with friends", 
            dislikes: "Strangers, any criticism of Mom, revealing of personal life"}} ,
        LEO: { date: "July 23 - August 22", info: {
            strengths : "Creative, passionate, generous, warm-hearted, cheerful, humorous", 
            weaknesses: "Arrogant, stubborn, self-centered, lazy, inflexible", 
            likes: "Theater, taking holidays, being admired, expensive things, bright colors, fun with friends", 
            dislikes: "Being ignored, facing difficult reality, not being treated like a king or queen"}} ,
        VIRGO: { date: "August 23 – September 22", info: {
            strengths : "Loyal, analytical, kind, hardworking, practical", 
            weaknesses: "Shyness, worry, overly critical of self and others, all work and no play", 
            likes: "Animals, healthy food, books, nature, cleanliness", 
            dislikes: "Rudeness, asking for help, taking center stage"}} ,
        LIBRA: { date: "September 23 - October 22", info: {
            strengths : "Cooperative,diplomatic, gracious, fair-minded, social", 
            weaknesses: "Indecisive, avoids confrontations, will carry a grudge, self-pity", 
            likes: "Harmony, gentleness, sharing with others, the outdoors", 
            dislikes: "Violence, injustice, loudmouths, conformity"}} ,
        SCORPIO: { date: "October 23 - November 21", info: {
            strengths : "Resourceful, brave, passionate, stubborn, a true friend", 
            weaknesses: "Distrusting, jealous, secretive, violent", 
            likes: "Truth, facts, being right, longtime friends, teasing, a grand passion", 
            dislikes: "Dishonesty, revealing secrets, passive people"}} ,
        SAGITTARIUS: { date: "November 22 - December 21", info: {
            strengths : "Generous, idealistic, great sense of humor", 
            weaknesses: "Promises more than can deliver, very impatient, will say anything no matter how undiplomatic", 
            likes: "Freedom, travel, philosophy, being outdoors", 
            dislikes: "Clingy people, being constrained, off-the-wall theories, details"}} ,
        CAPRICORN: { date: "December 22 - January 19", info: {
            strengths : "Responsible, disciplined, self-control, good managers", 
            weaknesses: " Know-it-all, unforgiving, condescending, expecting the worst", 
            likes: "Family, tradition, music, understated status, quality craftsmanship", 
            dislikes: "Almost everything at some point"}} 
        }
};