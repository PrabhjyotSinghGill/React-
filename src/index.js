const first = {name:'Mosh'};
const second = {job:'Instructor'};

const combined = {...first,...second, location:'Australia'};

console.log(combined);