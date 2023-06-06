const encodeHTML = (str) => {
  return str
    .replace(/[\u00A0-\u9999<>&](?!#)/gim, (i) => {
      return '&#' + i.charCodeAt(0) + ';'
    })
    .replace(/\u0008/gim, '')
}

const renderError = (message, secondaryMessage = '') => {
  return `
    <svg width="724" height="120" viewBox="0 0 724 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
    .text a { font: 600 16px 'Segoe UI', Ubuntu, Sans-Serif; fill: #2F80ED; text-decoration: underline }
    .text { font: 600 16px 'Segoe UI', Ubuntu, Sans-Serif; fill: #2F80ED }
    .small { font: 600 12px 'Segoe UI', Ubuntu, Sans-Serif; fill: #252525 }
    .gray { fill: #858585 }
    </style>
    <rect x="0.5" y="0.5" width="723" height="99%" rx="4.5" fill="#FFFEFE" stroke="#E4E2E2"/>
    <text x="25" y="45" class="text">Something went wrong! file an issue at <a id="netease" target="_blank" href="https://github.com/zonemeen/netease-recent-profile">https://github.com/zonemeen/netease-recent-profile</a></text>
    <text data-testid="message" x="25" y="55" class="text small">
      <tspan x="25" dy="18">${encodeHTML(message)}</tspan>
      <tspan x="25" dy="18" class="gray">${secondaryMessage}</tspan> 
    </text>
    </svg>
  `
}

const CONSTANTS = {
  CACHE_FOUR_HOURS: 14400,
  CACHE_ONE_DAY: 86400,
}

export { renderError, CONSTANTS }
