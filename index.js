const routes = require('./routes/routes');

const handleEvent = async (event, context) => {
    const controller = routes[event.params.path.proxy];
    
    if (controller) {
        try {
            const response = controller(event['body-json'].x, event['body-json'].y);
            return response;
        } catch (e) {
            return {error: e.toString()};
        }
    }else{
        return {error: 'Something poofed'};
    }
}

exports.handler = handleEvent;