if (self.CavalryLogger) { CavalryLogger.start_js(["IH4QJ"]); }

__d("MMercurySyncNewMessageTransformer",["IrisProtocolMessageLifetime","MercuryActionType","MercuryIDs","MercuryMessageCustomizations","MercuryProfileRanges","MessageThreadReadStateEffect","MessagingTag"],(function(a,b,c,d,e,f,g,h,i,j,k,l,m){"use strict";__p&&__p();var n=l.MessageThreadReadStateEffectType,o=l.extractThreadStateEffectFromDelta,p=function(a){var b={};try{b=JSON.parse(a)}catch(a){}return b instanceof Array?b[0]:b};function a(a,b){var c=parseInt(b.messageMetadata.timestamp,10),d=b.messageMetadata.skipBumpThread,e=o(a,b);a=e===n.MARK_UNREAD&&a!==b.messageMetadata.actorFbId;var f=[];b.attachments&&(f=b.attachments.map(function(a){return a.mercury}));var l=b.messageMetadata.tags?b.messageMetadata.tags[0]:undefined;return{message_id:b.messageMetadata.messageId,threading_id:null,offline_threading_id:b.messageMetadata.offlineThreadingId,author:i.getParticipantIDFromUserID(b.messageMetadata.actorFbId),author_email:b.messageMetadata.actorFbId+"@facebook.com",ephemeral_ttl_mode:b.ttl?g[b.ttl]:0,timestamp:c,is_unread:a,is_filtered_content:!1,is_filtered_content_bh:!1,is_filtered_content_account:!1,is_filtered_content_quasar:!1,is_filtered_content_invalid_app:!1,source:l,tags:b.messageMetadata.tags,is_spoof_warning:!1,folder:m.INBOX,thread_fbid:b.messageMetadata.threadKey.threadFbId,other_user_fbid:b.messageMetadata.threadKey.otherUserFbId,body:b.body!==undefined?b.body:"",html_body:null,subject:null,has_attachment:f.length>0,attachments:f,ranges:undefined,thread_id:null,action_type:h.USER_GENERATED_MESSAGE,is_from_iris:!0,is_sponsored:!!(b.data&&b.data.is_sponsored&&b.data.is_sponsored==="true")||!!(b.untypedData&&b.untypedData.is_sponsored&&b.untypedData.is_sponsored==="true"),commerce_message_type:b.data?b.data.commerce_message_type:null,customizations:b.data&&b.data.customization?j.parseCustomizations(b.data.customization):null,platform_xmd:b.data&&b.data.platform_xmd?b.data.platform_xmd:null,profile_ranges:k.extractFromDelta(b),message_source:b.data&&b.data.message_source_data?p(b.data.message_source_data).message_source:null,skip_bump_thread:d,thread_read_state_effect:e,montage_reply_data:b.data&&b.data.montage_reply_data?p(b.data.montage_reply_data):null,meta_ranges:b.data&&b.data.meta_ranges?p(b.data.meta_ranges):null}}e.exports={transform:a}}),null);