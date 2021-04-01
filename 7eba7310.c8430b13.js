(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{206:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return d}));var r=t(3),a=t(8),o=(t(0),t(323)),i=t(329),c={id:"relay-hooks-and-legacy-container-apis",title:"Relay Hooks and Legacy Container APIs",slug:"/migration-and-compatibility/relay-hooks-and-legacy-container-apis/",description:"Relay guide to compatibility between hooks and containers",keywords:["migration","compatibility","container","QueryRenderer","FragmentContainer","RefetchContainer","PaginationContainer"]},l={unversionedId:"migration-and-compatibility/relay-hooks-and-legacy-container-apis",id:"migration-and-compatibility/relay-hooks-and-legacy-container-apis",isDocsHomePage:!1,title:"Relay Hooks and Legacy Container APIs",description:"Relay guide to compatibility between hooks and containers",source:"@site/docs/migration-and-compatibility/relay-hooks-and-legacy-container-apis.md",slug:"/migration-and-compatibility/relay-hooks-and-legacy-container-apis/",permalink:"/docs/next/migration-and-compatibility/relay-hooks-and-legacy-container-apis/",editUrl:"https://github.com/facebook/relay/edit/master/website/docs/migration-and-compatibility/relay-hooks-and-legacy-container-apis.md",version:"current",lastUpdatedBy:"Jan Kassens",lastUpdatedAt:1617311474,sidebar:"docs",previous:{title:"Suspense Combatibility",permalink:"/docs/next/migration-and-compatibility/suspense-compatibility/"},next:{title:"Relay DevTools",permalink:"/docs/next/debugging/relay-devtools/"}},s=[{value:"Compatibility between Relay Hooks and Containers",id:"compatibility-between-relay-hooks-and-containers",children:[]},{value:"Migrating existing container-based code",id:"migrating-existing-container-based-code",children:[{value:"<code>QueryRenderer</code> \u2192 <code>useLazyLoadQuery</code>",id:"queryrenderer-\u2192-uselazyloadquery",children:[]},{value:"<code>QueryRenderer</code> \u2192 <code>useQueryLoader</code> + <code>usePreloadedQuery</code>",id:"queryrenderer-\u2192-usequeryloader--usepreloadedquery",children:[]},{value:"Fragment Container \u2192 <code>useFragment</code>",id:"fragment-container-\u2192-usefragment",children:[]},{value:"Refetch Container \u2192 <code>useRefetchableFragment</code>",id:"refetch-container-\u2192-userefetchablefragment",children:[]},{value:"Pagination Container \u2192 <code>usePaginationFragment</code>",id:"pagination-container-\u2192-usepaginationfragment",children:[]},{value:"QueryRenderer \u2192 useEntryPointLoader + EntryPointContainer",id:"queryrenderer-\u2192-useentrypointloader--entrypointcontainer",children:[]},{value:"commitMutation \u2192 useMutation",id:"commitmutation-\u2192-usemutation",children:[]},{value:"requestSubscription \u2192 useSubscription",id:"requestsubscription-\u2192-usesubscription",children:[]}]}],u={toc:s};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"compatibility-between-relay-hooks-and-containers"},"Compatibility between Relay Hooks and Containers"),Object(o.b)("p",null,"Relay Hooks are fully compatible with Relay's ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../../api-reference/legacy-apis/"}),"container-based APIs"),", meaning that containers can render components that use Hooks, and vice-versa."),Object(o.b)("p",null,"This means that you can adopt Relay Hooks incrementally, either by using them exclusively for new code, or by migrating specific parts of your app, without affecting the rest of your existing application."),Object(o.b)("h2",{id:"migrating-existing-container-based-code"},"Migrating existing container-based code"),Object(o.b)("p",null,"As we've mentioned, migrating existing code to Relay Hooks is ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"not"))," required, and ",Object(o.b)("strong",{parentName:"p"},"container-based code will continue to work"),"."),Object(o.b)("p",null,"However, in this section we will go over common migration patterns you can follow if you do choose to migrate container-based code to Relay Hooks."),Object(o.b)("h3",{id:"queryrenderer-\u2192-uselazyloadquery"},Object(o.b)("inlineCode",{parentName:"h3"},"QueryRenderer")," \u2192 ",Object(o.b)("inlineCode",{parentName:"h3"},"useLazyLoadQuery")),Object(o.b)("p",null,"Converting from a ",Object(o.b)("inlineCode",{parentName:"p"},"QueryRenderer")," to the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../../api-reference/use-lazy-load-query/"}),Object(o.b)("inlineCode",{parentName:"a"},"useLazyLoadQuery"))," Hook is the most straightforward conversion, and will have a similar behavior of fetching the specified query ",Object(o.b)("em",{parentName:"p"},"during render.")),Object(o.b)("p",null,"To convert a ",Object(o.b)("inlineCode",{parentName:"p"},"QueryRenderer")," to ",Object(o.b)("inlineCode",{parentName:"p"},"useLazyLoadQuery"),", you need to take the following steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Render a ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"../../api-reference/relay-environment-provider/"}),Object(o.b)("inlineCode",{parentName:"a"},"RelayEnvironmentProvider"))," where the QueryRenderer was, or above it. Usually, we recommend rendering the ",Object(o.b)("inlineCode",{parentName:"li"},"RelayEnvironmentProvider")," at the very root of your app:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"<RelayEnvironmentProvider environment={MyAppEnvironment}>\n  <App />\n</RelayEnvironmentProvider>\n")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Convert the ",Object(o.b)("inlineCode",{parentName:"li"},"QueryRenderer")," into ",Object(o.b)("inlineCode",{parentName:"li"},"useLazyLoadQuery"),":")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Before:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import * as React from 'React';\nimport {graphql, QueryRenderer} from 'react-relay';\n\nexport default function Home() {\n  return (\n    <QueryRenderer\n      environment={MyAppEnvironment}\n      query={graphql`\n        query HomeQuery($id: ID!) {\n          user(id: $id) {\n            name\n          }\n        }\n      `}\n      variables={{id: 4}}\n      render={(props, error) => {\n        if (error) {\n          return <Error />;\n        }\n        if (!props) {\n          return <Loading />;\n        }\n        return <h1>{props.user?.name}</h1>\n      }}\n    />\n  );\n}\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"After:"),"\nFetch and render the query:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import * as React from 'React';\nimport {graphql, useLazyLoadQuery} from 'react-relay';\n\nexport default function Home() {\n  const data = useLazyLoadQuery(\n    graphql`\n      query HomeQuery($id: ID!) {\n        user(id: $id) {\n          name\n        }\n      }\n    `,\n    {id: 4},\n  );\n\n return <h1>{data.user?.name}</h1>;\n}\n")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../../guided-tour/rendering/loading-states/"}),"Loading states")," and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../../guided-tour/rendering/error-states/"}),"error states")," are handled by Suspense and Error Boundaries:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"<ErrorBoundary renderError={Error}>\n  <Suspense fallback={<Loading />}>\n    <Home />\n  </Suspense>\n</ErrorBoundary>\n")),Object(o.b)("h3",{id:"queryrenderer-\u2192-usequeryloader--usepreloadedquery"},Object(o.b)("inlineCode",{parentName:"h3"},"QueryRenderer")," \u2192 ",Object(o.b)("inlineCode",{parentName:"h3"},"useQueryLoader")," + ",Object(o.b)("inlineCode",{parentName:"h3"},"usePreloadedQuery")),Object(o.b)("p",null,"Unlike ",Object(o.b)("inlineCode",{parentName:"p"},"useLazyLoadQuery"),", using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../../api-reference/use-query-loader/"}),Object(o.b)("inlineCode",{parentName:"a"},"useQueryLoader"))," in combination with ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../../api-reference/use-preloaded-query/"}),Object(o.b)("inlineCode",{parentName:"a"},"usePreloadedQuery"))," will start fetching the data ",Object(o.b)("em",{parentName:"p"},"ahead"),' of render, following the "render-as-you-fetch" pattern. This means that the data fetch will start sooner, and potentially speed up the time it takes to show content to users.'),Object(o.b)("p",null,"To make best use of this pattern, query loading is usually integrated at the router level, or other parts of your UI infra. To see a full example, see our ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/relayjs/relay-examples/blob/master/issue-tracker/src/routes.js"}),Object(o.b)("inlineCode",{parentName:"a"},"issue-tracker"))," example app."),Object(o.b)("p",null,"To convert a ",Object(o.b)("inlineCode",{parentName:"p"},"QueryRenderer")," to ",Object(o.b)("inlineCode",{parentName:"p"},"useQueryLoader"),", you need to take the following steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Render a ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"../../api-reference/relay-environment-provider/"}),Object(o.b)("inlineCode",{parentName:"a"},"RelayEnvironmentProvider"))," where the QueryRenderer was, or above it. Usually, we recommend rendering the ",Object(o.b)("inlineCode",{parentName:"li"},"RelayEnvironmentProvider")," at the very root of your app:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"<RelayEnvironmentProvider environment={MyAppEnvironment}>\n  <App />\n</RelayEnvironmentProvider>\n")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Convert the ",Object(o.b)("inlineCode",{parentName:"li"},"QueryRenderer")," into ",Object(o.b)("inlineCode",{parentName:"li"},"useQueryLoader")," + ",Object(o.b)("inlineCode",{parentName:"li"},"usePreloadedQuery"),":")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Before:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import * as React from 'React';\nimport {graphql, QueryRenderer} from 'react-relay';\n\nexport default function UserPopover() {\n  return (\n    <QueryRenderer\n      environment={MyAppEnvironment}\n      query={graphql`\n        query UserPopoverQuery($id: ID!) {\n          user(id: $id) {\n            name\n          }\n        }\n      `}\n      variables={{id: 4}}\n      render={(props, error) => {\n        if (error) {\n          return <Error />;\n        }\n        if (!props) {\n          return <Loading />;\n        }\n        return <h1>{props.user?.name}</h1>\n      }}\n    />\n  );\n}\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"After:"),"\nRender the preloaded query:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import * as React from 'React';\nimport {graphql, usePreloadedQuery} from 'react-relay';\n\nexport default function UserPopover(props) {\n  const data = usePreloadedQuery(\n    graphql`\n      query UserPopoverQuery($id: ID!) {\n        user(id: $id) {\n          name\n        }\n      }\n    `,\n    props.queryRef,\n  );\n\n return <h1>{data.user?.name}</h1>;\n}\n")),Object(o.b)("p",null,"Load the query with ",Object(o.b)("inlineCode",{parentName:"p"},"loadQuery")," from ",Object(o.b)("inlineCode",{parentName:"p"},"useQueryLoader"),". This part of the code would usually be integrated in your routing, or other parts of your UI infra:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import * as React from 'React';\nimport {useQueryLoader} from 'react-relay';\n\n// Import the query defined in the UserPopover component\nimport UserPopoverQuery from '__generated__/UserPopoverQuery.graphql';\n\n// This is *NOT* a real-world example, only used\n// to illustrate usage.\n\nexport default function UserPopoverButton(props) {\n  const [queryRef, loadQuery] = useQueryLoader(UserPopoverQuery)\n\n  const handleClick = useCallback(() => {\n    // Load the query in the event handler, onClick\n    loadQuery({id: props.userID})\n  }, [loadQuery, props.userID]);\n\n  return (\n    <>\n      <Button onClick={handleClick} />\n      {queryRef != null ?\n        <Popover>\n\n          {/* Loading and error states are handled by\n          Suspense and Error Boundaries */}\n          <ErrorBoundary renderError={Error}>\n            <Suspense fallback={<Loading />}>\n\n              {/*Pass the queryRef*/}\n              <UserPopover queryRef={queryRef} />\n\n            </Suspense>\n          </ErrorBoundary>\n        </Popover>\n        : null\n      }\n    </>\n  );\n}\n")),Object(o.b)("h3",{id:"fragment-container-\u2192-usefragment"},"Fragment Container \u2192 ",Object(o.b)("inlineCode",{parentName:"h3"},"useFragment")),Object(o.b)("p",null,"Fragment Containers will map directly into a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../../api-reference/use-fragment/"}),Object(o.b)("inlineCode",{parentName:"a"},"useFragment"))," call:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Before:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import * as React from 'React';\nimport {graphql, createFragmentContainer} from 'react-relay';\n\nfunction UserComponent(props: Props) {\n  const user = props.user;\n  return (\n    <>\n      <h1>{user.name}</h1>\n      <div>\n        <img src={user.profile_picture?.uri} />\n      </div>\n    </>\n  );\n}\n\nexport default createFragmentContainer(UserComponent, {\n  user: graphql`\n    fragment UserComponent_user on User {\n      name\n      age\n      profile_picture(scale: 2) {\n        uri\n      }\n    }\n  `,\n});\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"After:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import * as React from 'React';\nimport {graphql, useFragment} from 'react-relay';\n\nexport default function UserComponent(props: Props) {\n  const data = useFragment(\n    graphql`\n      fragment UserComponent_user on User {\n        name\n        profile_picture(scale: $scale) {\n          uri\n        }\n      }\n    `,\n    props.user,\n  );\n\n  return (\n    <>\n      <h1>{data.name}</h1>\n      <div>\n        <img src={data.profile_picture?.uri} />\n      </div>\n    </>\n  );\n}\n")),Object(o.b)("h3",{id:"refetch-container-\u2192-userefetchablefragment"},"Refetch Container \u2192 ",Object(o.b)("inlineCode",{parentName:"h3"},"useRefetchableFragment")),Object(o.b)("p",null,"The refetch API for ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../../api-reference/use-refetchable-fragment/"}),Object(o.b)("inlineCode",{parentName:"a"},"useRefetchableFragment"))," has been simplified and reduced compared to the former Refetch Container. Migration will require mapping inputs into the new API."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Before:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import * as React from 'React';\nimport {graphql, createRefetchContainer} from 'react-relay';\n\nfunction CommentBody(props: Props) {\n  const relay = props.relay;\n\n  return (\n    <>\n      <p>{data.body?.text}</p>\n      <Button\n        onClick={() => relay.refetch(\n          {lang: 'SPANISH'}, // fragmentVariables\n          null,  // renderVariables\n          error => { ... },\n          {force: true}\n        )}>\n        Translate Comment\n      </Button>\n    </>\n  );\n}\n\nexport default createRefetchContainer(\n  CommentBody,\n  {\n    user: graphql`\n      fragment CommentBody_comment on Comment {\n        body(lang: $lang) {\n          text\n        }\n      }\n    `,\n  },\n\n  // This option is no longer required, the refetch query\n  // will automatically be generated by Relay using the @refetchable\n  // directive.\n  graphql`\n    query AppQuery($id: ID!, lang: Lang) {\n      node(id: $id) {\n        ...CommentBody_comment\n      }\n    }\n  `,\n);\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"After:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import * as React from 'React';\nimport {graphql, useRefetchableFragment} from 'react-relay';\n\nexport default function CommentBody(props: Props) {\n  const [data, refetch] = useRefetchableFragment(\n    graphql`\n      fragment CommentBody_comment on Comment\n      @refetchable(queryName: \"CommentBodyRefetchQuery\") {\n        body(lang: $lang) {\n          text\n        }\n      }\n    `,\n    props.comment,\n  );\n\n  const handleClick = useCallback(() => {\n    refetch({lang: 'SPANISH'});\n  }, [refetch]);\n\n  return (\n    <>\n      <p>{data.body?.text}</p>\n      <Button\n        onClick={handleClick}>\n        Translate Comment\n      </Button>\n    </>\n  );\n}\n")),Object(o.b)("h3",{id:"pagination-container-\u2192-usepaginationfragment"},"Pagination Container \u2192 ",Object(o.b)("inlineCode",{parentName:"h3"},"usePaginationFragment")),Object(o.b)("p",null,"The pagination API for ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../../api-reference/use-pagination-fragment/"}),Object(o.b)("inlineCode",{parentName:"a"},"usePaginationFragment"))," has been greatly simplified and reduced compared to the former PaginationContainer. Migration will require mapping inputs into the new API."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Before:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'import * as React from \'React\';\nimport {graphql, createPaginationContainer} from \'react-relay\';\n\nclass UserContainerComponent extends React.Component {\n  render(): React.Node {\n    const isLoading = this.props.relay.isLoading() || this.state.loading;\n    const hasMore = this.props.relay.hasMore();\n\n    return (\n      <>\n        <FriendsList friends={this.props.user?.friends} />\n        <Button\n          onClick={() => this.loadMore()}\n          disabled={!hasMore || isLoading}>\n          Load More\n          {isLoading && <InlineSpinner />}\n        </Button>\n      </>\n    );\n  }\n\n  loadMore() {\n    if (\n      !this.props.relay.hasMore() ||\n      this.props.relay.isLoading() ||\n      this.state.loading\n    ) {\n      return;\n    }\n\n    this.setState({loading: true});\n\n    this.props.relay.loadMore(5, () => this.setState({loading: false}));\n  }\n}\n\nexport default createPaginationContainer(\n  UserContainerComponent,\n  {\n    user: graphql`\n      fragment UserContainerComponent_user on User\n      @argumentDefinitions(count: {type: "Int!"}, cursor: {type: "ID"})\n      @refetchable(queryName: "UserComponentRefetchQuery") {\n        friends(first: $count, after: $cursor)\n          @connection(key: "UserComponent_user_friends") {\n          edges {\n            node {\n              name\n            }\n          }\n        }\n      }\n    `,\n  },\n  {\n    // This option is no longer necessary, usePaginationFragment supports\n    // bi-directional pagination out of the box.\n    direction: \'forward\',\n\n    // This option is no longer required, and will be automatically\n    // determined by usePaginationFragment\n    getConnectionFromProps(props: Props) {\n      return props.user?.friends;\n    },\n\n    // This option is no longer required, and will be automatically\n    // determined by usePaginationFragment\n    getFragmentVariables(vars, count) {\n      return {...vars, count};\n    },\n\n    // This option is no longer required, and will be automatically\n    // determined by usePaginationFragment\n    getVariables(props: Props, {count, cursor}) {\n      return {\n        cursor,\n        count,\n      };\n    },\n\n    // This option is no longer required, the pagination query\n    // will automatically be generated by Relay using the @refetchable\n    // directive.\n    query: graphql`\n      query UserContainerComponentQuery {\n        viewer {\n          actor {\n            ... on User {\n              ...UserContainerComponent_user @arguments(count: 10)\n            }\n          }\n        }\n      }\n    `,\n  },\n);\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"After:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import * as React from 'React';\nimport {graphql, usePaginationFragment} from 'react-relay';\n\nexport default function UserComponent(props: Props) {\n  const {data, loadNext, hasNext, isLoadingNext} = usePaginationFragment(\n    graphql`\n      fragment UserComponent_user on User\n      @refetchable(queryName: \"UserComponentRefetchQuery\") {\n        friends(first: $count, after: $after)\n          @connection(key: \"UserComponent_user_friends\") {\n          edges {\n            node {\n              name\n            }\n          }\n        }\n      }\n    `,\n    props.user,\n  );\n\n  const handleClick = useCallback(() => {\n    loadNext(5)\n  }, [loadNext])\n\n  return (\n    <>\n      <FriendsList friends={data?.friends?.edges} />\n      <Button onClick={handleClick} disabled={!hasNext || isLoadingNext}>\n        Load More\n        {isLoadingNext && <InlineSpinner />}\n      </Button>\n    </>\n  );\n}\n")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"queryrenderer-\u2192-useentrypointloader--entrypointcontainer"},"QueryRenderer \u2192 useEntryPointLoader + EntryPointContainer"),Object(o.b)("p",null,"TODO"),Object(o.b)("h3",{id:"commitmutation-\u2192-usemutation"},"commitMutation \u2192 useMutation"),Object(o.b)("p",null,"TODO"),Object(o.b)("h3",{id:"requestsubscription-\u2192-usesubscription"},"requestSubscription \u2192 useSubscription"),Object(o.b)("p",null,"TODO"),Object(o.b)(i.a,{mdxType:"DocsRating"}))}d.isMDXComponent=!0},323:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),b=r,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||o;return t?a.a.createElement(m,c(c({ref:n},s),{},{components:t})):a.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},324:function(e,n,t){"use strict";(function(e){var r=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),a=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(n,e,t);return a(n,e),n};Object.defineProperty(n,"__esModule",{value:!0}),n.OssOnly=n.FbInternalOnly=n.isInternal=n.validateFbContentArgs=n.fbInternalOnly=n.fbContent=n.bloks=void 0,n.bloks=o(t(327));const i=["internal","external"];let c;try{c=t(325).usePluginData}catch(p){c=null}function l(e){return u(e),d()?"internal"in e?s(e.internal):[]:"external"in e?s(e.external):[]}function s(e){return"function"==typeof e?e():e}function u(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${i}. Instead got ${e}`);if(!Object.keys(e).find((e=>i.find((n=>n===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${i}`);const n=Object.keys(e).filter((e=>!i.find((n=>n===e))));if(n.length>0)throw new Error(`Unexpected keys ${n} found in fbContent() args. Accepted keys: ${i}`)}function d(){return e.env.FB_INTERNAL||c&&c("internaldocs-fb").FB_INTERNAL}n.fbContent=l,n.fbInternalOnly=function(e){return l({internal:e})},n.validateFbContentArgs=u,n.isInternal=d,n.FbInternalOnly=function(e){return d()?e.children:null},n.OssOnly=function(e){return d()?null:e.children}}).call(this,t(326))},325:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return a})),t.d(n,"useAllPluginInstancesData",(function(){return o})),t.d(n,"usePluginData",(function(){return i}));var r=t(22);function a(){var e=Object(r.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function o(e){var n=a()[e];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return n}function i(e,n){void 0===n&&(n="default");var t=o(e)[n];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+n);return t}},326:function(e,n){var t,r,a=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var l,s=[],u=!1,d=-1;function p(){u&&l&&(u=!1,l.length?s=l.concat(s):d=-1,s.length&&b())}function b(){if(!u){var e=c(p);u=!0;for(var n=s.length;n;){for(l=s,s=[];++d<n;)l&&l[d].run();d=-1,n=s.length}l=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(n){try{return r.call(null,e)}catch(n){return r.call(this,e)}}}(e)}}function m(e,n){this.fun=e,this.array=n}function f(){}a.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];s.push(new m(e,n)),1!==s.length||u||c(b)},m.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=f,a.addListener=f,a.once=f,a.off=f,a.removeListener=f,a.removeAllListeners=f,a.emit=f,a.prependListener=f,a.prependOnceListener=f,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},327:function(e,n,t){"use strict";var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(a,o){function i(e){try{l(r.next(e))}catch(n){o(n)}}function c(e){try{l(r.throw(e))}catch(n){o(n)}}function l(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,c)}l((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getSpecInfo=void 0;const a=t(328);n.getSpecInfo=function(e){return r(this,void 0,void 0,(function*(){return yield a.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},328:function(e,n,t){"use strict";var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(a,o){function i(e){try{l(r.next(e))}catch(n){o(n)}}function c(e){try{l(r.throw(e))}catch(n){o(n)}}function l(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,c)}l((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.call=void 0;let a=!1,o=0;const i={};n.call=function(e){return r(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));a||(a=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const n=e.data.id;n in i||console.error(`Recieved response for id: ${n} with no matching receiver`),"response"in e.data?i[n].resolve(e.data.response):i[n].reject(new Error(e.data.error)),delete i[n]})));const n=o++,t=new Promise(((e,t)=>{i[n]={resolve:e,reject:t}})),r={event:"static-docs-bridge-call",id:n,module:e.module,api:e.api,args:e.args},c="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(r,c),t}))}},329:function(e,n,t){"use strict";t(61);var r=t(324),a=t(0);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function i(e){var n=e.children;return a.createElement("div",{className:"docsRating",id:"docsRating"},a.createElement("hr",null),n)}var c=function(){var e=a.useState(!1),n=e[0],t=e[1],r=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":a.createElement(a.Fragment,null,"Is this page useful?",a.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),a.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},l=function(){return a.createElement("p",null,"Let us know how these docs can be improved by",a.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},s=function(){return a.createElement(i,null,a.createElement(l,null),a.createElement(c,null))},u=function(){return a.createElement(i,null,a.createElement(c,null))};n.a=function(){return Object(r.fbContent)({internal:a.createElement(s,null),external:a.createElement(u,null)})}}}]);