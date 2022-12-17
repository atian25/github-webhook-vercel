import { Probot, ApplicationFunctionOptions } from "probot";

export default (app: Probot, options?: ApplicationFunctionOptions) => {
  app.on(["issues.opened", "issues.edited"], async context => {
    console.log(context.name, Object.keys(context.payload));
    app.log.info({ event: context.name, payload: context.payload });
    const issueComment = context.issue({
      body: "Thanks for opening this issue!",
    });
    await context.octokit.issues.createComment(issueComment);
  });

  app.onAny(async context => {
    app.log.info({ event: context.name, payload: context.payload });
  });

  // const router = options.getRouter("/");
  // router.get('/echo', (req, res) => {
  //   console.log(req.query);
  //   console.log(req.headers);
  //   console.log(req.body);
  //   res.send({
  //     appId: process.env.APP_ID,
  //     query: req.query,
  //     headers: req.headers,
  //     body: req.body,
  //   });
  // });
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
