import { router, m } from "pyrite";

import { ExamplePage } from "./ExamplePage";

const configRoutes: any = [{
	path: "/",
	component: ExamplePage
}];

m.route(document.body, '/', router.build(configRoutes) as any);