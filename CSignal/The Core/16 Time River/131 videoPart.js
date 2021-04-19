// You have been watching a video for some time. Knowing the total video duration find out what portion of the video you have already watched.

// Example

// For part = "02:20:00" and total = "07:00:00", the output should be
// videoPart(part, total) = [1, 3].

// You have watched 1 / 3 of the whole video.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string part

// A string of the following format "hh:mm:ss" representing the time you have been watching the video.

// [input] string total

// A string of the following format "hh:mm:ss" representing the total video duration.

// [output] array.integer

// An array of the following format [a, b] (where a / b is a reduced fraction).

function videoPart(part, total) {
  const gcm = (a, b) => (b === 0 ? a : gcm(b, a % b));
  const totalSplit = total.split(":");
  const totalSecs =
    parseInt(totalSplit[0] * 60 * 60) +
    parseInt(totalSplit[1] * 60) +
    parseInt(totalSplit[2]);
  const partSplit = part.split(":");
  const partSecs =
    parseInt(partSplit[0] * 60 * 60) +
    parseInt(partSplit[1] * 60) +
    parseInt(partSplit[2]);

  const gcd = gcm(partSecs, totalSecs);

  return [partSecs / gcd, totalSecs / gcd];
}

//other answers
function videoPart(part, total) {
  a = part.split(":").map((x) => Number(x));
  b = total.split(":").map((x) => Number(x));
  x = a[0] * 3600 + a[1] * 60 + a[2];
  y = b[0] * 3600 + b[1] * 60 + b[2];
  a = x;
  b = y;
  while (y > 0) {
    tg = x % y;
    x = y;
    y = tg;
  }
  return [a / x, b / x];
}

function videoPart(part, total) {
  if (part == total) {
    return [1, 1];
  }
  (p = part.split(":").map(Number)), (t = total.split(":").map(Number));
  (p = p[0] * 60 * 60 + p[1] * 60 + p[2]),
    (t = t[0] * 60 * 60 + t[1] * 60 + t[2]),
    (b = true);
  while (b) {
    b = false;
    for (i = Math.ceil(p > t ? p / 2 + 1 : t / 2 + 1); i > 1; i--) {
      if (p % i == 0 && t % i == 0) {
        (p /= i), (t /= i), (b = true);
        break;
      }
    }
  }
  return [p, t];
}

function videoPart(p, t) {
  var c = ["3600", "60", "1"];

  p = p
    .split(":")
    .map(function (x, i) {
      return x * c[i];
    })
    .reduce((a, b) => a + b);
  t = t
    .split(":")
    .map(function (x, i) {
      return x * c[i];
    })
    .reduce((a, b) => a + b);

  if (t % p == 0) return [1, t / p];

  for (var i = 2; i < p; i++) {
    while (p % i == 0 && t % i == 0) {
      p /= i;
      t /= i;
    }
  }

  return [p, t];
}
