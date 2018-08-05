if (self.CavalryLogger) { CavalryLogger.start_js(["yJ6d3"]); }

__d("MMercurySyncReplaceMessageTransformer",["MercuryActionType","MMercurySyncNewMessageTransformer"],(function(a,b,c,d,e,f,g,h){"use strict";function a(a,b){b=Object.assign({},b.newMessage,b);return Object.assign(h.transform(a,b),{action_type:g.REPLACE_MESSAGE,replaced_message_id:b.replacedMessageId})}e.exports={transform:a}}),null);