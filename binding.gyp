{
  "targets": [
    {
      "target_name": "<(module_name)",
      "sources": ["src/cpuinfo.cpp"],
      "product_dir": "<(module_path)",
      "include_dirs": [ "<!@(node -p \"require('node-addon-api').include\")" ],
      "defines": [ "NAPI_DISABLE_CPP_EXCEPTIONS" ]
    }
  ]
}