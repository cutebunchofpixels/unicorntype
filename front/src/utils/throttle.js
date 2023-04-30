export default function throttle(f, ms) {
    let savedThis, savedArgs;
    let isThrottled = false;

    return function wrapper() {
        if (isThrottled) {
            savedThis = this;
            savedArgs = arguments;
            return;
        }

        f.apply(this, arguments);
        isThrottled = true;

        setTimeout(() => {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedThis = savedArgs = null;
            }
        }, ms);
    }    
}