(Fejlesztői dokumentáció) [localhost:3000/apidoc].
# NestJs + Prisma

# Felhasznált technológiák
- NestJS
- Prisma
- TypeScript
- bcrypt
- REST API
- MySQL
- Cron
- JWT

# Telepítési útmutató

## Követelmények

- Node.js 18+
- npm 
- Git

## Telepítés

```bash
git clone https://github.com/Fruvvien/NoRelaxBackend.git
cd .\NoRelaxBackend\


Xammp alkalmazás megnyitása
azon belül indítsuk el ezt a kettő modulet
- Apache - start
- MySQL - start

Majd nyomjunk rá a MySQL sorában látható admin gombra.
A megjelent oldalon az importálás gombra rákattintva feldob egy új lapot, ahol láthatunk egy fájlbehelyezést arra kattintva a továbbiakban kiválasztjuk a norelax.sql filet

Mind ezek után a le cloneozott backend alkalmazásunkon belül létrehozunk egy új file-t amit elnevezünk .env-nek
itt a .env.example file tartalmát átmásoljuk ebbe a létrehozott fileba és ezek után lefuttatjuk a következő commandokat `npm install`
`npx prisma generate`
majd elindítjuk a backend alkalmazást
`npm run start:dev`

