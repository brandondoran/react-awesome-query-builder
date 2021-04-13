export default
{
  "and": [
    {
      "==": [
        {
          "var": "user.loggedIn"
        },
        true
      ]
    },
    {
      "==": [
        {
          "var": "user.hasPurchasedOrder"
        },
        false
      ]
    },
    {
      "some": [
        {
          "var": "user.promotionalOffers"
        },
        {
          "==": [
            {
              "var": "userSegment"
            },
            "spring_sale_np"
          ]
        }
      ]
    },
    {
      "==": [
        {
          "var": "split.pwa_cms_rollout"
        },
        "on"
      ]
    }
  ]
};
