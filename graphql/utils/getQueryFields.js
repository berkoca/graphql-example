const graphqlFields = require('graphql-fields');

function getQueryFields(info, exclude_fields, include_fields) {
    var fields = Object.keys(graphqlFields(info), null, 2);
    if (exclude_fields && exclude_fields.length > 0) {
        var new_fields = [];
        for (var field of fields) {
            if (!exclude_fields.includes(field)) {
                new_fields.push(field);
            }
        }
        fields = new_fields;
    }
    if (include_fields && include_fields.length > 0) {
        fields = fields.concat(include_fields);
    }
    return fields;
}

module.exports = getQueryFields;