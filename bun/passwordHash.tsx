const password = "super-secure-pa$$word";
console.log(password);

const hash = await Bun.password.hash(password);
console.log(hash);
// => $argon2id$v=19$m=65536,t=2,p=1$tFq+9AVr1bfPxQdh...

const isMatch = await Bun.password.verify(password, hash);
// => true
