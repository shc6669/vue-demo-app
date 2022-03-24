import { createStore } from "vuex";
import { config } from "vuex-module-decorators";

import ApiModule from "@/store/modules/ApiModule";
import BodyModule from "@/store/modules/BodyModule";
import BreadcrumbsModule from "@/store/modules/BreadcrumbsModule";
import ConfigModule from "@/store/modules/ConfigModule";

config.rawError = true;

const store = createStore({
  modules: {
    ApiModule,
    BodyModule,
    BreadcrumbsModule,
    ConfigModule,
  },
});

export default store;
