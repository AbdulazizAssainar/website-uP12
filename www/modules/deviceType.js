"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDeviceType = void 0;
function getDeviceType(req) {
    const ua = String(req.get('User-Agent'));
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    }
    if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return "mobile";
    }
    return "desktop";
}
exports.getDeviceType = getDeviceType;
;
//# sourceMappingURL=deviceType.js.map