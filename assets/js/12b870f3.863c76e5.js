(self.webpackChunk=self.webpackChunk||[]).push([[8369],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>b});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),b=r,h=d["".concat(c,".").concat(b)]||d[b]||p[b]||a;return n?i.createElement(h,o(o({ref:t},u),{},{components:n})):i.createElement(h,o({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68629:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var i=n(44256),r=n(67294);function a(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function o(e){var t=e.children;return r.createElement("div",{className:"docsRating",id:"docsRating"},r.createElement("hr",null),t)}var s=function(){var e=r.useState(!1),t=e[0],n=e[1],i=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":r.createElement(r.Fragment,null,"Is this page useful?",r.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return i(1)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),r.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return i(0)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},c=function(){return r.createElement("p",null,"Let us know how these docs can be improved by",r.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:a},"Filing a task"))},l=function(){return r.createElement(o,null,r.createElement(c,null),r.createElement(s,null))},u=function(){return r.createElement(o,null,r.createElement(s,null))};const p=function(){return(0,i.fbContent)({internal:r.createElement(l,null),external:r.createElement(u,null)})}},48079:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>u,metadata:()=>p,toc:()=>d,default:()=>h});var i=n(22122),r=n(19756),a=(n(67294),n(3905)),o=n(68629),s=n(44256),c=["components"],l={id:"graphql-subscriptions",title:"GraphQL Subscriptions",slug:"/guided-tour/updating-data/graphql-subscriptions/",description:"Relay guide to GraphQl subscriptions",keywords:["subscription"]},u=void 0,p={unversionedId:"guided-tour/updating-data/graphql-subscriptions",id:"version-v12.0.0/guided-tour/updating-data/graphql-subscriptions",isDocsHomePage:!1,title:"GraphQL Subscriptions",description:"Relay guide to GraphQl subscriptions",source:"@site/versioned_docs/version-v12.0.0/guided-tour/updating-data/graphql-subscriptions.md",sourceDirName:"guided-tour/updating-data",slug:"/guided-tour/updating-data/graphql-subscriptions/",permalink:"/docs/v12.0.0/guided-tour/updating-data/graphql-subscriptions/",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v12.0.0/guided-tour/updating-data/graphql-subscriptions.md",version:"v12.0.0",lastUpdatedBy:"Mofei Zhang",lastUpdatedAt:1642794430,formattedLastUpdatedAt:"1/21/2022",frontMatter:{id:"graphql-subscriptions",title:"GraphQL Subscriptions",slug:"/guided-tour/updating-data/graphql-subscriptions/",description:"Relay guide to GraphQl subscriptions",keywords:["subscription"]},sidebar:"version-v12.0.0/docs",previous:{title:"GraphQL Mutations",permalink:"/docs/v12.0.0/guided-tour/updating-data/graphql-mutations/"},next:{title:"Local Data Updates",permalink:"/docs/v12.0.0/guided-tour/updating-data/local-data-updates/"}},d=[{value:"Request subscription API",id:"request-subscription-api",children:[]},{value:"Requesting a subscription with Hooks",id:"requesting-a-subscription-with-hooks",children:[]},{value:"Configuring the Network Layer",id:"configuring-the-network-layer",children:[]}],b={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,i.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://our.internmc.facebook.com/intern/wiki/GraphQL_Subscriptions/"},"GraphQL Subscriptions")," (GQLS) are a mechanism which allow clients to subscribe to changes in a piece of data from the server, and get notified whenever that data changes.")),(0,a.kt)(s.OssOnly,{mdxType:"OssOnly"},(0,a.kt)("p",null,"GraphQL Subscriptions (GQLS) are a mechanism which allow clients to subscribe to changes in a piece of data from the server, and get notified whenever that data changes.")),(0,a.kt)("p",null,"A GraphQL Subscription looks very similar to a query, with the exception that it uses the subscription keyword:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"subscription FeedbackLikeSubscription($input: FeedbackLikeSubscribeData!) {\n  feedback_like_subscribe(data: $input) {\n    feedback {\n      id\n      like_count\n    }\n  }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Subscribing to the above subscription will notify the client whenever the specified ",(0,a.kt)("inlineCode",{parentName:"li"},"Feedback"),' object has been "liked" or "unliked". The ',(0,a.kt)("inlineCode",{parentName:"li"},"feedback_like_subscription")," field is the subscription field itself, which takes specific input and will set up the subscription in the backend."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"feedback_like_subscription")," returns a specific GraphQL type which exposes the data we can query in the subscription payload; that is, whenever the client is notified, it will receive the subscription payload in the notification. In this case, we're querying for the Feedback object with its ",(0,a.kt)("em",{parentName:"li"},"updated")," ",(0,a.kt)("inlineCode",{parentName:"li"},"like_count"),", which will allows us to show the like count in real time.")),(0,a.kt)("p",null,"An example of a subscription payload received by the client could look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "feedback_like_subscribe": {\n    "feedback": {\n      "id": "feedback-id",\n      "like_count": 321,\n    }\n  }\n}\n')),(0,a.kt)("p",null,"In Relay, we can declare GraphQL subscriptions using the ",(0,a.kt)("inlineCode",{parentName:"p"},"graphql")," tag too:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const {graphql} = require('react-relay');\n\nconst feedbackLikeSubscription = graphql`\n  subscription FeedbackLikeSubscription($input: FeedbackLikeSubscribeData!) {\n    feedback_like_subscribe(data: $input) {\n      feedback {\n        id\n        like_count\n      }\n    }\n  }\n`;\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Note that subscriptions can also reference GraphQL ",(0,a.kt)("a",{parentName:"li",href:"../../rendering/variables/"},"variables")," in the same way queries or fragments do.")),(0,a.kt)("p",null,"There are two ways of ",(0,a.kt)("em",{parentName:"p"},"executing")," a subscription against the server. The ",(0,a.kt)("inlineCode",{parentName:"p"},"requestSubscription")," API and using hooks."),(0,a.kt)("h2",{id:"request-subscription-api"},"Request subscription API"),(0,a.kt)("p",null,"In order to execute a subscription against the server in Relay, we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"requestSubscription")," API:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import type {Environment} from 'react-relay';\nimport type {FeedbackLikeSubscribeData} from 'FeedbackLikeSubscription.graphql';\n\nconst {graphql, requestSubscription} = require('react-relay');\n\nfunction feedbackLikeSubscribe(\n  environment: Environment,\n  feedbackID: string,\n  input: FeedbackLikeSubscribeData,\n) {\n  return requestSubscription(environment, {\n    subscription: graphql`\n      subscription FeedbackLikeSubscription(\n        $input: FeedbackLikeSubscribeData!\n      ) {\n        feedback_like_subscribe(data: $input) {\n          feedback {\n            id\n            like_count\n          }\n        }\n      }\n    `,\n    variables: {input},\n    onCompleted: () => {} /* Subscription established */,\n    onError: error => {} /* Subscription errored */,\n    onNext: response => {} /* Subscription payload received */\n  });\n}\n\nmodule.exports = {subscribe: feedbackLikeSubscribe};\n")),(0,a.kt)("p",null,"Let's distill what's happening here:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"requestSubscription")," takes an environment, the ",(0,a.kt)("inlineCode",{parentName:"li"},"graphql")," tagged subscription, and the variables to use."),(0,a.kt)("li",{parentName:"ul"},"Note that the ",(0,a.kt)("inlineCode",{parentName:"li"},"input")," for the subscription can be Flow typed with the autogenerated type available from the ",(0,a.kt)("em",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"em"},"FeedbackLikeSubscription.graphql"))," module. In general, the Relay will generate Flow types for subscriptions at build time, with the following naming format: ",(0,a.kt)("inlineCode",{parentName:"li"},"*<subscription_name>*.graphql.js"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"requestSubscription")," also takes an ",(0,a.kt)("inlineCode",{parentName:"li"},"onCompleted")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"onError")," callbacks, which will respectively be called when the subscription is successfully established, or when an error occurs."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"requestSubscription")," also takes an ",(0,a.kt)("inlineCode",{parentName:"li"},"onNext")," callback, which will be called whenever a subscription payload is received."),(0,a.kt)("li",{parentName:"ul"},"When the subscription payload is received, ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"if the objects in the subscription payload have IDs, the records in the local store will "),"automatically* be updated with the new field values from the payload"),".* In this case, it would automatically find the existing ",(0,a.kt)("inlineCode",{parentName:"li"},"Feedback")," object matching the given ID in the store, and update the values for the ",(0,a.kt)("inlineCode",{parentName:"li"},"like_count")," field."),(0,a.kt)("li",{parentName:"ul"},"Note that any local data updates caused by the subscription will automatically cause components subscribed to the data to be notified of the change and re-render.")),(0,a.kt)("p",null,"However, if the updates you wish to perform on the local data in response to the subscription are more complex than just updating the values of fields, like deleting or creating new records, or ",(0,a.kt)("a",{parentName:"p",href:"../../list-data/updating-connections/"},"adding and removing items from a connection"),", you can provide an ",(0,a.kt)("a",{parentName:"p",href:"../graphql-mutations/"},(0,a.kt)("inlineCode",{parentName:"a"},"updater"))," function to ",(0,a.kt)("inlineCode",{parentName:"p"},"requestSubscription")," for full control over how to update the store:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import type {Environment} from 'react-relay';\nimport type {CommentCreateSubscribeData} from 'CommentCreateSubscription.graphql';\n\nconst {graphql, requestSubscription} = require('react-relay');\n\nfunction commentCreateSubscribe(\n  environment: Environment,\n  feedbackID: string,\n  input: CommentCreateSubscribeData,\n) {\n  return requestSubscription(environment, {\n    subscription: graphql`\n      subscription CommentCreateSubscription(\n        $input: CommentCreateSubscribeData!\n      ) {\n        comment_create_subscribe(data: $input) {\n          feedback_comment_edge {\n            cursor\n            node {\n              body {\n                text\n              }\n            }\n          }\n        }\n      }\n    `,\n    variables: {input},\n    updater: store => {\n      const feedbackRecord = store.get(feedbackID);\n\n      // Get connection record\n      const connectionRecord = ConnectionHandler.getConnection(\n        feedbackRecord,\n        'CommentsComponent_comments_connection',\n      );\n\n      // Get the payload returned from the server\n      const payload = store.getRootField('comment_create_subscribe');\n\n      // Get the edge inside the payload\n      const serverEdge = payload.getLinkedRecord('feedback_comment_edge');\n\n      // Build edge for adding to the connection\n      const newEdge = ConnectionHandler.buildConnectionEdge(\n        store,\n        connectionRecord,\n        serverEdge,\n      );\n\n      // Add edge to the end of the connection\n      ConnectionHandler.insertEdgeAfter(connectionRecord, newEdge);\n    },\n    onCompleted: () => {} /* Subscription established */,\n    onError: error => {} /* Subscription errored */,\n    onNext: response => {} /* Subscription payload received */,\n  });\n}\n\nmodule.exports = {subscribe: commentCreateSubscribe};\n")),(0,a.kt)("p",null,"Let's distill this example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"updater")," takes a ",(0,a.kt)("em",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"em"},"store"))," argument, which is an instance of a ",(0,a.kt)("a",{parentName:"li",href:"../../../api-reference/store/"},(0,a.kt)("inlineCode",{parentName:"a"},"RecordSourceSelectorProxy")),";  this interface allows you to ",(0,a.kt)("em",{parentName:"li"},"imperatively")," write and read data directly to and from the Relay store. This means that you have full control over how to update the store in response to the subscription payload: you can ",(0,a.kt)("em",{parentName:"li"},"create entirely new records"),", or ",(0,a.kt)("em",{parentName:"li"},"update or delete existing ones"),". The full API for reading and writing to the Relay store is available here: ",(0,a.kt)("a",{parentName:"li",href:"https://facebook.github.io/relay/docs/en/relay-store.html"},"https://facebook.github.io/relay/docs/en/relay-store.html")),(0,a.kt)("li",{parentName:"ul"},"In our specific example, we're adding a new comment to our local store when we receive a subscription payload notifying us that a new comment has been created. Specifically, we're adding a new item to a connection; for more details on the specifics of how that works, check out our ",(0,a.kt)("a",{parentName:"li",href:"../../list-data/updating-connections/"},"Updating Connections")," section."),(0,a.kt)("li",{parentName:"ul"},"Note that the subscription payload is a ",(0,a.kt)("em",{parentName:"li"},"root field")," record that can be read from the ",(0,a.kt)("inlineCode",{parentName:"li"},"store"),", specifically using the ",(0,a.kt)("inlineCode",{parentName:"li"},"store.getRootField")," API. In our case, we're reading the ",(0,a.kt)("inlineCode",{parentName:"li"},"comment_create_subcribe")," root field, which is a root field in the subscription response."),(0,a.kt)("li",{parentName:"ul"},"Note that any local data updates caused by the mutation ",(0,a.kt)("inlineCode",{parentName:"li"},"updater")," will automatically cause components subscribed to the data to be notified of the change and re-render.")),(0,a.kt)("h2",{id:"requesting-a-subscription-with-hooks"},"Requesting a subscription with Hooks"),(0,a.kt)("p",null,"You can also use hooks to subscribe to a ",(0,a.kt)("em",{parentName:"p"},"subscription query"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {graphql, useSubscription} from 'react-relay';\nimport {useMemo} from 'react';\n\nconst subscription = graphql`subscription ...`;\nfunction MyFunctionalComponent({ id }) {\n  // IMPORTANT: your config should be memoized, or at least not re-computed\n  // every render. Otherwise, useSubscription will re-render too frequently.\n  const config = useMemo(() => { variables: { id }, subscription }, [id]);\n  useSubscription(config);\n  return <div>Move Fast</div>\n}\n")),(0,a.kt)("p",null,"This is only a thin wrapper around the ",(0,a.kt)("inlineCode",{parentName:"p"},"requestSubscription")," API. It's behavior:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Subscribe when the component is mounted with the given config"),(0,a.kt)("li",{parentName:"ul"},"Unsubscribe when the component is unmounted")),(0,a.kt)("p",null,"If you have the need to do something more complicated, such as imperatively requesting a subscription, please use the ",(0,a.kt)("inlineCode",{parentName:"p"},"requestSubscription")," API directly."),(0,a.kt)("h2",{id:"configuring-the-network-layer"},"Configuring the Network Layer"),(0,a.kt)(s.OssOnly,{mdxType:"OssOnly"},(0,a.kt)("p",null,"You will need to Configure your ",(0,a.kt)("a",{parentName:"p",href:"../../../guides/network-layer"},"Network Layer")," to handle subscriptions. The below example uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apollographql/subscriptions-transport-ws"},"subscriptions-transport-ws"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import {\n    ...\n    Network,\n    Observable\n} from 'relay-runtime';\nimport { SubscriptionClient } from 'subscriptions-transport-ws';\n\n...\n\nconst subscriptionClient = new SubscriptionClient('ws://localhost:3000', {\n    reconnect: true,\n});\n\nconst subscribe = (request, variables) => {\n    const subscribeObservable = subscriptionClient.request({\n        query: request.text,\n        operationName: request.name,\n        variables,\n    });\n    // Important: Convert subscriptions-transport-ws observable type to Relay's\n    return Observable.from(subscribeObservable);\n};\n\nconst network = Network.create(fetchQuery, subscribe);\n\n...\n"))),(0,a.kt)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,a.kt)("p",null,"At Facebook, the Network Layer has already been configured to handle GraphQL Subscriptions. For more details on writing subscriptions at Facebook, check out this ",(0,a.kt)("a",{parentName:"p",href:"../../../guides/writing-subscriptions/"},"guide"),". For a guide on setting up subscriptions on the server side, check out this ",(0,a.kt)("a",{parentName:"p",href:"https://our.internmc.facebook.com/intern/wiki/GraphQL_Subscriptions/creating-a-new-subscription/"},"wiki"),".")),(0,a.kt)(o.Z,{mdxType:"DocsRating"}))}h.isMDXComponent=!0}}]);