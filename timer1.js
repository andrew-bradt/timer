const alarmTimesMs = process.argv.slice(2)
  .map(string => Number(string) * 1000)
  .filter(num => !isNaN(num) && num >= 0);

for (const time of alarmTimesMs) {
  setTimeout(()=>{
    process.stdout.write('\x07');
  }, time);
}