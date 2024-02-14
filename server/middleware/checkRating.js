export async function CheckRating(req, res, next) {
  try {
    const { rating } = req.body;

    if (rating < 0) {
      res.status(406).send("Your rating is under level!");
      return
    }

    if (rating > 10) {
      res.status(406).send("Your rating is above level");
      return
    }

    next();
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
}
