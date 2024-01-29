function createReport(birthdate, prev) {

	birthdate = new Date(birthdate);
	const astroSign = getAstrologicalSign(birthdate);
	const astroDescription = getSignDescription(astroSign);
	const chineseZodiac = getChineseZodiac(birthdate.getFullYear());
	const zodiacDescription = getChineseZodiacDescription(chineseZodiac);
	const dayOfWeek = calculateDayOfWeek(birthdate);
	const exactAge = calculateExactAge(birthdate);
	const remainingTime = calculateRemainingTime(birthdate, 79);
	const astroIcon = getAstroIcon(astroSign);

	if (prev) {
		document.getElementById('profile').innerHTML = `
			<h2>Your Birthday (${birthdate.toDateString()}):</h2>
			<img src="${astroIcon}" alt="icon" width="300" height="300"><br><br>
			<strong>Astrological Sign:</strong> ${astroSign} - ${astroDescription}<br>
			<strong>Chinese Zodiac Sign:</strong> ${chineseZodiac} - ${zodiacDescription}<br>
			<strong>Day of the Week:</strong> ${dayOfWeek}<br>
			<strong>Exact Age:</strong> ${exactAge.years} years, ${exactAge.months} months, ${exactAge.days} days<br>
			<strong>Remaining Time (U.S. average of 79 yrs):</strong> ${remainingTime.years} years, ${remainingTime.months} months, ${remainingTime.days} days`;

	}
	else {
		document.getElementById('result').innerHTML = `
		<img src=\"${astroIcon}\" alt=\"icon\" width=\"300\" height=\"300\"><br><br>
	    <strong>Astrological Sign:</strong> ${astroSign} - ${astroDescription}<br>
	    <strong>Chinese Zodiac Sign:</strong> ${chineseZodiac} - ${zodiacDescription}<br>
	    <strong>Day of the Week:</strong> ${dayOfWeek}<br>
	    <strong>Exact Age:</strong> ${exactAge.years} years, ${exactAge.months} months, ${exactAge.days} days<br>
	    <strong>Remaining Time (U.S. average of 79 yrs):</strong> ${remainingTime.years} years, ${remainingTime.months} months, ${remainingTime.days} days`;
	}

}

function calculateDayOfWeek(date) {
	let day = date.getDate();
	let month = date.getMonth() + 1;
	let year = date.getFullYear();

	if (month < 3) {
		month += 12;
		year -= 1;
	}

	const k = year % 100;
	const j = Math.floor(year / 100);

	let f = day + Math.floor((13 * (month + 1)) / 5) + k + Math.floor(k / 4) + Math.floor(j / 4) - 2 * j;
	f = (f + 7) % 7;

	const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	return daysOfWeek[f];
}

function getAstrologicalSign(date) {
	const month = date.getMonth() + 1;
	const day = date.getDate();

	if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
		return "Aries";
	} else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
		return "Taurus";
	} else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
		return "Gemini";
	} else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
		return "Cancer";
	} else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
		return "Leo";
	} else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
		return "Virgo";
	} else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
		return "Libra";
	} else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
		return "Scorpio";
	} else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
		return "Sagittarius";
	} else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
		return "Capricorn";
	} else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
		return "Aquarius";
	} else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
		return "Pisces";
	}
}

function getAstroIcon(sign) {
	if (sign === "Aries") {
		return "images/aries.png";
	}
	else if (sign === "Taurus") {
		return "images/taurus.png";
	}
	else if (sign === "Gemini") {
		return "images/gemini.png";
	}
	else if (sign === "Cancer") {
		return "images/cancer.png";
	}
	else if (sign === "Leo") {
		return "images/leo.png";
	}
	else if (sign === "Virgo") {
		return "images/virgo.png";
	}
	else if (sign === "Libra") {
		return "images/libra.png";
	}
	else if (sign === "Scorpio") {
		return "images/scorpio.png";
	}
	else if (sign === "Sagittarius") {
		return "images/sagittarius.png";
	}
	else if (sign === "Capricorn") {
		return "images/capricorn.png";
	}
	else if (sign === "Aquarius") {
		return "images/aquarius.png";
	}
	else if (sign === "Pisces") {
		return "images/pisces.png";
	}
}

function getSignDescription(sign) {
	const descriptions = {
		"Aries": "Dynamic, competitive, and fiery.",
		"Taurus": "Reliable, practical, and responsible.",
		"Gemini": "Curious, adaptable, and communicative.",
		"Cancer": "Intuitive, sentimental, and compassionate.",
		"Leo": "Vibrant, dramatic, and outgoing.",
		"Virgo": "Practical, loyal, and gentle.",
		"Libra": "Harmonious, fair, and social.",
		"Scorpio": "Passionate, resourceful, and brave.",
		"Sagittarius": "Adventurous, optimistic, and fun-loving.",
		"Capricorn": "Disciplined, responsible, and patient.",
		"Aquarius": "Progressive, original, and independent.",
		"Pisces": "Empathetic, artistic, and intuitive."
	};

	return descriptions[sign];
}

function getChineseZodiac(year) {
	const animals = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Sheep", "Monkey", "Rooster", "Dog", "Pig"];
	return animals[(year - 1900) % 12];
}

function getChineseZodiacDescription(sign) {
	const descriptions = {
		"Rat": "Intelligent, adaptable, quick-witted",
		"Ox": "Loyal, reliable, thorough, strong",
		"Tiger": "Enthusiastic, courageous, ambitious",
		"Rabbit": "Trustworthy, empathic, modest",
		"Dragon": "Lucky, flexible, eccentric",
		"Snake": "Philosophical, organized, intelligent",
		"Horse": "Energetic, independent, impatient",
		"Sheep": "Mild-mannered, shy, kind",
		"Monkey": "Fun, energetic, active",
		"Rooster": "Independent, practical, hard-working",
		"Dog": "Loyal, faithful, honest",
		"Pig": "Loving, tolerant, honest"
	};

	return descriptions[sign];
}

function calculateExactAge(birthdate) {
	const now = new Date();
	let years = now.getFullYear() - birthdate.getFullYear();
	let months = now.getMonth() - birthdate.getMonth();
	let days = now.getDate() - birthdate.getDate();

	if (months < 0 || (months === 0 && days < 0)) {
		years--;
		months = (months + 12) % 12;
	}

	if (days < 0) {
		const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
		days += previousMonth.getDate();
	}

	return { years, months, days };
}

function calculateRemainingTime(birthdate, averageLifespan) {
	const now = new Date();
	const endOfLife = new Date(birthdate.getFullYear() + averageLifespan, birthdate.getMonth(), birthdate.getDate());

	let years = endOfLife.getFullYear() - now.getFullYear();
	let months = endOfLife.getMonth() - now.getMonth();
	let days = endOfLife.getDate() - now.getDate();

	if (months < 0 || (months === 0 && days < 0)) {
		years--;
		months = (months + 12) % 12;
	}

	if (days < 0) {
		const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
		days += previousMonth.getDate();
	}

	return { years, months, days };
}
