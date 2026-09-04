// 0.2
const templars = {
  title: "Templars Law",
  slug: "example.com/templars-law",
  sector: "Law",
  year: 1995,
  image: {
    url: "https://placehold.co/400",
    alt: "Placeholder 400",
  },
  award: "Placeholder Award 1",
};

const venomIt = {
  title: "VenomIT",
  slug: "example.com/venomit",
  sector: "IT & Computing",
  year: 1996,
  image: {
    url: "https://placehold.co/400",
    alt: "Placeholder 400",
  },
  award: "Placeholder Award 2",
};

const northcoders = {
  title: "Northcoders",
  slug: "example.com/northcoders",
  sector: "Learning & Development",
  year: 1997,
  image: {
    url: "https://placehold.co/400",
    alt: "Placeholder 400",
  },
};

// Nested destructuring
const getImageAlt = ({ image: { alt } }) => alt;

console.log(getImageAlt(templars));
console.log(getImageAlt(northcoders));

function withNewYear(p, year) {
  return { ...p, year };
}

console.log(withNewYear(templars, 2000)); // New Year
console.log(templars.year); // Should remain 1995
console.log(withNewYear(venomIt, 2026)); // New Year
console.log(venomIt.year); // Should remain 1996

// Simple destructuring
const projectHasAward = ({ award }) => award ?? "No Award";

console.log(projectHasAward(northcoders));
console.log(projectHasAward(venomIt));
console.log(projectHasAward(templars));
