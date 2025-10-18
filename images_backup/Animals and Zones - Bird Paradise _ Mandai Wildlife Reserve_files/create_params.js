function sjrn_decipher(str) {
  try {
    return atob(decodeURIComponent(str));
  } catch (e) {
    return '';
  }
}

function sjrn_create_params(all_params) {
  var params = {};
  for (param of all_params) {
    if (param.includes('=')) {
      split_param = param.split('=');
      if (split_param[1] != 'undefined') {
        params[split_param[0]] = decodeURIComponent(split_param[1]);
        if (
          split_param[0] != 'eml' &&
          split_param[0] != 'auto_eml_domain' &&
          split_param[0] != 'auto_eml_list' &&
          split_param[0] != 'auto_eml' &&
          split_param[0] != 'e_eml'
        ) {
          if ('cid' in params) {
            params.cid = params.cid + '|' + param;
          } else {
            params.cid = param;
          }
        }
      }
    }
  }
  if (
    params.e_eml > '' &&
    params.e_eml != 'null' &&
    params.e_eml != 'undefined' &&
    params.auto_out != 'all' &&
    params.auto_out != 'email'
  ) {
    var e = sjrn_decipher(params.e_eml).toLowerCase();
    if (e.includes('@')) {
      params.md5_eml = md5(e);
      params.sha1_eml = sha1(e);
      params.sha256_eml = sha256(e);
      params.s = 'email_input';
      try {
        params.s += ':' + e.split('@')[1];
      } catch (e) {}
    }
  } else if (
    params.eml > '' &&
    params.eml != 'null' &&
    params.eml != 'undefined' &&
    params.eml.includes('@')
  ) {
    var e = params['eml'].replace(/\s/g, '').toLowerCase();
    params.md5_eml = md5(e);
    params.sha1_eml = sha1(e);
    params.sha256_eml = sha256(e);
    params.s = 'email_client';
  } else if (params.md5_eml || params.sha1_eml || params.sha256_eml) {
    params.s = 'email_prehashed';
  } else if (
    params.auto_eml > '' &&
    (params.hconfno ||
      params.vconfno ||
      params.fconfno ||
      params.tconfno ||
      params.econfno ||
      params.cconfno ||
      params.rconfno) &&
    params.auto_out != 'all' &&
    params.auto_out != 'email'
  ) {
    var e = sjrn_decipher(params.auto_eml).toLowerCase();
    if (e.includes('@')) {
      params.md5_eml = md5(e);
      params.sha1_eml = sha1(e);
      params.sha256_eml = sha256(e);
      params.s = 'email_conversion:' + params.auto_eml_count;
      if (params.auto_eml_domain) {
        params.s += ':' + sjrn_decipher(params.auto_eml_domain);
      }
    }
  }
  if (params.auto_url) {
    params.domain = params.auto_url;
  }
  if (params.ccid) {
    if ('s' in params) {
      params.s += '|ccid_client';
    } else {
      params.s = 'ccid_client';
    }
    try {
      referrer = document.referrer.split('://')[1] + ':';
    } catch (e) {
      referrer = '';
    }
    ccid_array = [];
    for (ccid of params.ccid.split('|')) {
      ccid_array.push(referrer + ccid);
    }
    params.ccid = ccid_array.join('|');
  }
  if (params.auto_ga && params.auto_out != 'all' && params.auto_out != 'ccid') {
    if ('s' in params) {
      params.s += '|ccid_ga';
    } else {
      params.s = 'ccid_ga';
    }
    if ('ccid' in params && params.ccid) {
      params.ccid += '|' + params.auto_ga;
    } else {
      params.ccid = params.auto_ga;
    }
  }
  if (
    params.auto_ccid &&
    params.auto_out != 'all' &&
    params.auto_out != 'ccid'
  ) {
    if ('s' in params) {
      params.s += '|ccid_auto';
    } else {
      params.s = 'ccid_auto';
    }
    if ('ccid' in params && params.ccid) {
      params.ccid += '|' + params.auto_ccid;
    } else {
      params.ccid = params.auto_ccid;
    }
  }
  if ('auto_out' in params) {
    if ('s' in params == false) {
      params.s = '';
    }
    if (params.auto_out == 'ccid') {
      params.s += '|auto_out_ccid';
    }
    if (params.auto_out == 'email') {
      params.s += '|auto_out_email';
    }
    if (params.auto_out == 'all') {
      params.s += '|auto_out_all';
    }
  }
  params.cid = 's=' + params.s + '|' + params.cid;
  try {
    delete params.auto_url;
    delete params.auto_ccid;
    delete params.auto_ga;
    delete params.e_eml;
    delete params.auto_eml;
    delete params.auto_eml_count;
    delete params.auto_eml_domain;
    delete params.auto_eml_list;
    delete params.eml;
  } catch (e) {}
  return params;
}
