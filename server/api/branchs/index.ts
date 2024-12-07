export default defineEventHandler(async (event) => {
  if (event.req.method === "GET") {
    return {
      branchs: [
        {
          id: 0,
          name: "شعبه مراغه",
          address: "مراغه، خواجه نصیر شمالی، ساختمان بوعلی، طبقه ۲",
          phone: "09195245590",
          latlong: [37.399375, 46.241329],
          image: "",
        },
        {
          id: 1,
          name: "شعبه شاهرود",
          address: "شاهرود، خیابان ۱۷ شهریور، نبش کوچه فریدنیا، ساختمان نیکان",
          phone: "09194795122",
          latlong: [36.424982, 54.964476],
          image: "",
        },
      ],
    };
  }
  if (event.req.method === "POST") {
    // create a blog
    await useStorage("redis").setItem("foo", "bar");

    // return the blog;
    const keys = await useStorage("redis").getKeys();
    return {
      keys,
    };
  }
});
