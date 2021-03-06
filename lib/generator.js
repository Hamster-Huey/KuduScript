/*** Generated by streamline 0.4.11 (callbacks) - DO NOT EDIT ***/ var __rt=require('streamline/lib/callbacks/runtime').runtime(__filename),__func=__rt.__func,__cb=__rt.__cb; var package = require("../package.json");
















var fs = require("fs");
var path = require("path");

var isWindows = (process.platform === "win32");


fs.existsSync = (fs.existsSync || path.existsSync);
path.sep = (path.sep || ((isWindows ? "\\" : "/")));

var templatesDir = path.join(__dirname, "templates");
var log = { info: function() {  }};
var confirm = function() { return false;};

var ScriptType = {
  batch: "BATCH",
  bash: "BASH",
  posh: "POSH"};


var ProjectType = {
  wap: "WAP",
  website: "WEBSITE",
  node: "NODE",
  python: "PYTHON",
  basic: "BASIC",
  functionApp: "FUNCTIONAPP",
  dotNetConsole: "DOT_NET_CONSOLE",
  aspNetCore: "ASP_NET_CORE",
  go: "GO",
  ruby: "RUBY"};


exports.ScriptType = ScriptType;
exports.ProjectType = ProjectType;

function ScriptGenerator(repositoryRoot, projectType, projectPath, solutionPath, sitePath, scriptType, scriptOutputPath, noDotDeployment, noSolution, logger, confirmFunc, useMSBuild) {
  argNotNull(repositoryRoot, "repositoryRoot");
  argNotNull(scriptOutputPath, "scriptOutputPath");
  argNotNull(projectType, "projectType");
  argNotNull(sitePath, "sitePath");

  projectType = projectType.toUpperCase();

  if (!scriptType) {

    if ((((((projectType === ProjectType.wap) || (projectType === ProjectType.website)) || (projectType === ProjectType.aspNetCore)) || (projectType === ProjectType.python)) || (projectType === ProjectType.go))) {

      scriptType = ScriptType.batch; }
     else {

      scriptType = (isWindows ? ScriptType.batch : ScriptType.bash); } ; }

   else {
    scriptType = scriptType.toUpperCase();
    if ((((scriptType !== ScriptType.batch) && (scriptType !== ScriptType.bash)) && (scriptType !== ScriptType.posh))) {
      throw new Error("Script type should be either batch or bash or posh"); } ; };


  this.scriptType = scriptType;

  log = (logger || log);
  confirm = (confirmFunc || confirm);

  if (projectPath) {
    if (!isPathSubDir(repositoryRoot, projectPath)) {
      throw new Error("The project file path should be a sub-directory of the repository root"); } ;


    var relativeProjectPath = path.relative(repositoryRoot, projectPath);
    log.info((("Project file path: ." + path.sep) + relativeProjectPath));
    this.projectPath = relativeProjectPath;
    this.absoluteProjectPath = projectPath; };


  if (solutionPath) {
    if (!isPathSubDir(repositoryRoot, solutionPath)) {
      throw new Error("The solution file path should be the same as repository root or a sub-directory of it."); } ;


    var relativeSolutionPath = path.relative(repositoryRoot, solutionPath);
    log.info((("Solution file path: ." + path.sep) + relativeSolutionPath));
    this.solutionPath = relativeSolutionPath; };


  if (!isPathSubDir(repositoryRoot, sitePath)) {
    throw new Error("The site directory path should be the same as repository root or a sub-directory of it."); };


  var relativeSitePath = path.relative(repositoryRoot, sitePath);
  if (relativeSitePath) {
    relativeSitePath = (path.sep + relativeSitePath);
    log.info(("The site directory path: ." + relativeSitePath)); };

  this.sitePath = (relativeSitePath || "");

  this.repositoryRoot = repositoryRoot;
  this.scriptOutputPath = scriptOutputPath;
  this.projectType = projectType;
  this.noDotDeployment = noDotDeployment;
  this.noSolution = noSolution;
  this.absoluteSitePath = path.join(this.repositoryRoot, this.sitePath);
  this.useMSBuild = useMSBuild;

  this.generators = [];
  this.generators[ProjectType.wap] = generateWapDeploymentScript;
  this.generators[ProjectType.website] = generateWebSiteDeploymentScript;
  this.generators[ProjectType.node] = generateNodeDeploymentScript;
  this.generators[ProjectType.python] = generatePythonDeploymentScript;
  this.generators[ProjectType.basic] = generateBasicWebSiteDeploymentScript;
  this.generators[ProjectType.functionApp] = generateFunctionAppDeploymentScript;
  this.generators[ProjectType.dotNetConsole] = generateDotNetConsoleDeploymentScript;
  this.generators[ProjectType.aspNetCore] = generateAspNetCoreDeploymentScript;
  this.generators[ProjectType.go] = generateGoDeploymentScript;
  this.generators[ProjectType.ruby] = generateRubyDeploymentScript;};


function generateGoDeploymentScript(scriptGenerator, _) { var __frame = { name: "generateGoDeploymentScript", line: 134 }; return __func(_, this, arguments, generateGoDeploymentScript, 1, __frame, function __$generateGoDeploymentScript() {
    return scriptGenerator.generateGoDeploymentScript(__cb(_, __frame, 1, 2, _, true)); });};


function generateAspNetCoreDeploymentScript(scriptGenerator, _) { var __frame = { name: "generateAspNetCoreDeploymentScript", line: 138 }; return __func(_, this, arguments, generateAspNetCoreDeploymentScript, 1, __frame, function __$generateAspNetCoreDeploymentScript() {
    return scriptGenerator.generateAspNetCoreDeploymentScript(__cb(_, __frame, 1, 2, _, true)); });};


function generateDnxConsoleAppDeploymentScript(scriptGenerator, _) { var __frame = { name: "generateDnxConsoleAppDeploymentScript", line: 142 }; return __func(_, this, arguments, generateDnxConsoleAppDeploymentScript, 1, __frame, function __$generateDnxConsoleAppDeploymentScript() {
    return scriptGenerator.generateDnxConsoleAppDeploymentScript(__cb(_, __frame, 1, 2, _, true)); });};


function generateDotNetConsoleDeploymentScript(scriptGenerator, _) { var __frame = { name: "generateDotNetConsoleDeploymentScript", line: 146 }; return __func(_, this, arguments, generateDotNetConsoleDeploymentScript, 1, __frame, function __$generateDotNetConsoleDeploymentScript() {
    return scriptGenerator.generateDotNetConsoleDeploymentScript(__cb(_, __frame, 1, 2, _, true)); });};


function generateWapDeploymentScript(scriptGenerator, _) { var __frame = { name: "generateWapDeploymentScript", line: 150 }; return __func(_, this, arguments, generateWapDeploymentScript, 1, __frame, function __$generateWapDeploymentScript() {
    return scriptGenerator.generateWapDeploymentScript(__cb(_, __frame, 1, 2, _, true)); });};


function generateWebSiteDeploymentScript(scriptGenerator, _) { var __frame = { name: "generateWebSiteDeploymentScript", line: 154 }; return __func(_, this, arguments, generateWebSiteDeploymentScript, 1, __frame, function __$generateWebSiteDeploymentScript() {
    return scriptGenerator.generateWebSiteDeploymentScript(__cb(_, __frame, 1, 2, _, true)); });};


function generateNodeDeploymentScript(scriptGenerator, _) { var __frame = { name: "generateNodeDeploymentScript", line: 158 }; return __func(_, this, arguments, generateNodeDeploymentScript, 1, __frame, function __$generateNodeDeploymentScript() {
    return scriptGenerator.generateNodeDeploymentScript(__cb(_, __frame, 1, 2, _, true)); });};


function generatePythonDeploymentScript(scriptGenerator, _) { var __frame = { name: "generatePythonDeploymentScript", line: 162 }; return __func(_, this, arguments, generatePythonDeploymentScript, 1, __frame, function __$generatePythonDeploymentScript() {
    return scriptGenerator.generatePythonDeploymentScript(__cb(_, __frame, 1, 2, _, true)); });};


function generateRubyDeploymentScript(scriptGenerator, _) { var __frame = { name: "generateRubyDeploymentScript", line: 166 }; return __func(_, this, arguments, generateRubyDeploymentScript, 1, __frame, function __$generateRubyDeploymentScript() {
    return scriptGenerator.generateRubyDeploymentScript(__cb(_, __frame, 1, 2, _, true)); });};


function generateBasicWebSiteDeploymentScript(scriptGenerator, _) { var __frame = { name: "generateBasicWebSiteDeploymentScript", line: 170 }; return __func(_, this, arguments, generateBasicWebSiteDeploymentScript, 1, __frame, function __$generateBasicWebSiteDeploymentScript() {
    if (scriptGenerator.solutionPath) {
      return _(new Error("Solution path is not supported with this website type")); } ;

    return scriptGenerator.generateWebSiteDeploymentScript(__cb(_, __frame, 4, 2, _, true)); });};


function generateFunctionAppDeploymentScript(scriptGenerator, _) { var __frame = { name: "generateFunctionAppDeploymentScript", line: 177 }; return __func(_, this, arguments, generateFunctionAppDeploymentScript, 1, __frame, function __$generateFunctionAppDeploymentScript() {
    return scriptGenerator.generateFunctionAppDeploymentScript(__cb(_, __frame, 1, 4, _, true)); });};


ScriptGenerator.prototype.generateDeploymentScript = function ScriptGenerator_prototype_generateDeploymentScript__1(_) { var generator, __this = this; var __frame = { name: "ScriptGenerator_prototype_generateDeploymentScript__1", line: 181 }; return __func(_, this, arguments, ScriptGenerator_prototype_generateDeploymentScript__1, 0, __frame, function __$ScriptGenerator_prototype_generateDeploymentScript__1() {
    generator = __this.generators[__this.projectType];
    if (!generator) {
      return _(new Error(("Invalid project type received: " + __this.projectType))); } ;


    return generator(__this, __cb(_, __frame, 6, 2, _, true)); });};


function isPathSubDir(parentPath, childPath) {
  var relativePath = path.relative(parentPath, childPath);




  return ((relativePath.indexOf("..") !== 0) && (relativePath !== path.resolve(childPath)));};



ScriptGenerator.prototype.generateGoDeploymentScript = function ScriptGenerator_prototype_generateGoDeploymentScript__2(_) { var __this = this; var __frame = { name: "ScriptGenerator_prototype_generateGoDeploymentScript__2", line: 200 }; return __func(_, this, arguments, ScriptGenerator_prototype_generateGoDeploymentScript__2, 0, __frame, function __$ScriptGenerator_prototype_generateGoDeploymentScript__2() {
    log.info("Generating deployment script for Go Web Site");

    return __this.generateBasicDeploymentScript("go.template", __cb(_, __frame, 3, 2, _, true)); });};


ScriptGenerator.prototype.generateNodeDeploymentScript = function ScriptGenerator_prototype_generateNodeDeploymentScript__3(_) { var __this = this; var __frame = { name: "ScriptGenerator_prototype_generateNodeDeploymentScript__3", line: 206 }; return __func(_, this, arguments, ScriptGenerator_prototype_generateNodeDeploymentScript__3, 0, __frame, function __$ScriptGenerator_prototype_generateNodeDeploymentScript__3() {
    log.info("Generating deployment script for node.js Web Site");

    return __this.generateBasicDeploymentScript("node.template", __cb(_, __frame, 3, 2, _, true)); });};


ScriptGenerator.prototype.generateFunctionAppDeploymentScript = function ScriptGenerator_prototype_generateFunctionAppDeploymentScript__4(_) { var __this = this; var __frame = { name: "ScriptGenerator_prototype_generateFunctionAppDeploymentScript__4", line: 212 }; return __func(_, this, arguments, ScriptGenerator_prototype_generateFunctionAppDeploymentScript__4, 0, __frame, function __$ScriptGenerator_prototype_generateFunctionAppDeploymentScript__4() {
    log.info("Generating deployment script for function App");

    return __this.generateBasicDeploymentScript("functionApp.template", __cb(_, __frame, 3, 4, _, true)); });};


ScriptGenerator.prototype.generatePythonDeploymentScript = function ScriptGenerator_prototype_generatePythonDeploymentScript__5(_) { var __this = this; var __frame = { name: "ScriptGenerator_prototype_generatePythonDeploymentScript__5", line: 218 }; return __func(_, this, arguments, ScriptGenerator_prototype_generatePythonDeploymentScript__5, 0, __frame, function __$ScriptGenerator_prototype_generatePythonDeploymentScript__5() {
    log.info("Generating deployment script for python Web Site");

    if ((__this.scriptType != ScriptType.batch)) {
      return _(new Error("Only batch script files are supported for python Web Site")); } ;


    return __this.generateBasicDeploymentScript("python.template", __cb(_, __frame, 7, 2, _, true)); });};


ScriptGenerator.prototype.generateRubyDeploymentScript = function ScriptGenerator_prototype_generateRubyDeploymentScript__6(_) { var __this = this; var __frame = { name: "ScriptGenerator_prototype_generateRubyDeploymentScript__6", line: 228 }; return __func(_, this, arguments, ScriptGenerator_prototype_generateRubyDeploymentScript__6, 0, __frame, function __$ScriptGenerator_prototype_generateRubyDeploymentScript__6() {
    log.info("Generating deployment script for Ruby Web Site");

    return __this.generateBasicDeploymentScript("ruby.template", __cb(_, __frame, 3, 2, _, true)); });};


ScriptGenerator.prototype.generateWapDeploymentScript = function ScriptGenerator_prototype_generateWapDeploymentScript__7(_) { var msbuildArguments, msbuildArgumentsForInPlace, solutionDir, solutionArgs, options, __this = this; var __frame = { name: "ScriptGenerator_prototype_generateWapDeploymentScript__7", line: 234 }; return __func(_, this, arguments, ScriptGenerator_prototype_generateWapDeploymentScript__7, 0, __frame, function __$ScriptGenerator_prototype_generateWapDeploymentScript__7() {
    argNotNull(__this.projectPath, "projectPath");

    if (((__this.scriptType != ScriptType.batch) && (__this.scriptType != ScriptType.posh))) {
      return _(new Error("Only batch and posh script files are supported for .NET Web Application")); } ;


    if ((!__this.solutionPath && !__this.noSolution)) {
      return _(new Error("Missing solution file path (--solutionFile), to explicitly not require a solution use the flag --no-solution")); } ;


    log.info("Generating deployment script for .NET Web Application");



    if ((__this.scriptType == ScriptType.batch)) {
      msbuildArguments = (("\"%DEPLOYMENT_SOURCE%\\" + __this.projectPath) + "\" /nologo /verbosity:m /t:Build /t:pipelinePreDeployCopyAllFilesToOneFolder /p:_PackageTempDir=\"%DEPLOYMENT_TEMP%\";AutoParameterizationWebConfigConnectionStrings=false;Configuration=Release;UseSharedCompilation=false");
      msbuildArgumentsForInPlace = (("\"%DEPLOYMENT_SOURCE%\\" + __this.projectPath) + "\" /nologo /verbosity:m /t:Build /p:AutoParameterizationWebConfigConnectionStrings=false;Configuration=Release;UseSharedCompilation=false");

      if (__this.solutionPath) {
        solutionDir = path.dirname(__this.solutionPath);
        solutionArgs = ((" /p:SolutionDir=\"%DEPLOYMENT_SOURCE%\\" + solutionDir) + "\\\\\"");
        msbuildArguments += solutionArgs;
        msbuildArgumentsForInPlace += solutionArgs; } ;


      msbuildArguments += " %SCM_BUILD_ARGS%";
      msbuildArgumentsForInPlace += " %SCM_BUILD_ARGS%"; }
     else {
      msbuildArguments = (("\"$DEPLOYMENT_SOURCE\\" + __this.projectPath) + "\" /nologo /verbosity:m /t:Build /t:pipelinePreDeployCopyAllFilesToOneFolder /p:_PackageTempDir=\"$DEPLOYMENT_TEMP\"`;AutoParameterizationWebConfigConnectionStrings=false`;Configuration=Release`;UseSharedCompilation=false");
      msbuildArgumentsForInPlace = (("\"$DEPLOYMENT_SOURCE\\" + __this.projectPath) + "\" /nologo /verbosity:m /t:Build /p:AutoParameterizationWebConfigConnectionStrings=false`;Configuration=Release`;UseSharedCompilation=false");

      if (__this.solutionPath) {
        solutionDir = path.dirname(__this.solutionPath);
        solutionArgs = ((" /p:SolutionDir=\"$DEPLOYMENT_SOURCE\\" + solutionDir) + "\\\\\"");
        msbuildArguments += solutionArgs;
        msbuildArgumentsForInPlace += solutionArgs; } ;


      msbuildArguments += " $env:SCM_BUILD_ARGS";
      msbuildArgumentsForInPlace += " $env:SCM_BUILD_ARGS"; } ;


    options = {
      msbuildArguments: msbuildArguments,
      msbuildArgumentsForInPlace: msbuildArgumentsForInPlace };


    return __this.generateDotNetDeploymentScript("aspnet.wap.template", options, __cb(_, __frame, 48, 2, _, true)); });};


ScriptGenerator.prototype.generateAspNetCoreDeploymentScript = function ScriptGenerator_prototype_generateAspNetCoreDeploymentScript__8(_) { var nuget_35_renamed, nugetRestore, files, webProjFiles, msbuildArguments, dotnetpublishArguments, options, nugetOrDotnetRestore, __this = this; var __frame = { name: "ScriptGenerator_prototype_generateAspNetCoreDeploymentScript__8", line: 285 }; return __func(_, this, arguments, ScriptGenerator_prototype_generateAspNetCoreDeploymentScript__8, 0, __frame, function __$ScriptGenerator_prototype_generateAspNetCoreDeploymentScript__8() {
    argNotNull(__this.absoluteProjectPath, "absoluteProjectPath");

    if (((__this.scriptType != ScriptType.batch) && (__this.scriptType != ScriptType.posh))) {
      return _(new Error("Only batch and posh script files are supported for ASP.NET Core Application")); } ;


    nuget_35_renamed = "nuget.exe";
    nugetRestore = (nuget_35_renamed + " restore -packagesavemode nuspec"); return (function __$ScriptGenerator_prototype_generateAspNetCoreDeploymentScript__8(__then) {

      if ((__this.solutionPath && !(__this.projectPath.endsWith(".csproj")))) {

        if (fs.lstatSync(__this.absoluteProjectPath).isDirectory()) {

          files = fs.readdirSync(__this.absoluteProjectPath);
          webProjFiles = files.filter(function(file) {
            return file.endsWith(".xproj"); });

          if ((webProjFiles.length != 1)) {
            return _(new Error(((("Expecting one xproj files but found " + webProjFiles.length) + " under") + __this.absoluteProjectPath))); } ;

          __this.projectPath = path.relative(__this.repositoryRoot, path.join(__this.absoluteProjectPath, webProjFiles[0])); } ;





        if ((__this.scriptType == ScriptType.batch)) {
          msbuildArguments = (("\"%DEPLOYMENT_SOURCE%\\" + __this.solutionPath) + "\" /nologo /verbosity:m /p:AutoParameterizationWebConfigConnectionStrings=false;Configuration=Release;UseSharedCompilation=false %SCM_BUILD_ARGS%");
          dotnetpublishArguments = (("\"%DEPLOYMENT_SOURCE%\\" + __this.projectPath) + "\" /nologo /verbosity:m /t:GatherAllFilesToPublish /p:AutoParameterizationWebConfigConnectionStrings=false;Configuration=Release;UseSharedCompilation=false;PublishOutputPathNoTrailingSlash=\"%DEPLOYMENT_TEMP%\" %SCM_BUILD_ARGS%"); }
         else {
          msbuildArguments = (("\"$DEPLOYMENT_SOURCE\\" + __this.solutionPath) + "\" /nologo /verbosity:m /p:AutoParameterizationWebConfigConnectionStrings=false`;Configuration=Release`;UseSharedCompilation=false` $SCM_BUILD_ARGS");
          dotnetpublishArguments = (("\"$DEPLOYMENT_SOURCE\\" + __this.projectPath) + "\" /nologo /verbosity:m /t:GatherAllFilesToPublish /p:AutoParameterizationWebConfigConnectionStrings=false`;Configuration=Release`;UseSharedCompilation=false`;PublishOutputPathNoTrailingSlash=\"$DEPLOYMENT_TEMP\" $SCM_BUILD_ARGS"); } ;


        options = {
          msbuildArguments: msbuildArguments,
          dotnetpublishArguments: dotnetpublishArguments,
          restore: nugetRestore,
          solutionPath: __this.solutionPath };


        return __this.generateAspNetCoreScript("aspnet.core.msbuild.template", options, __cb(_, __frame, 42, 4, __then, true)); } else {



        nugetOrDotnetRestore = (__this.projectPath.endsWith(".csproj") ? "dotnet restore" : nugetRestore);
        if (__this.solutionPath) {
          nugetOrDotnetRestore += ((" \"" + __this.solutionPath) + "\""); } ;

        return __this.generateAspNetCoreScript("aspnet.core.template", { aspNetCoreProject: __this.projectPath, restore: nugetOrDotnetRestore }, __cb(_, __frame, 50, 4, __then, true)); } ; })(_); });};



ScriptGenerator.prototype.generateDnxConsoleAppDeploymentScript = function ScriptGenerator_prototype_generateDnxConsoleAppDeploymentScript__9(_) { var options, __this = this; var __frame = { name: "ScriptGenerator_prototype_generateDnxConsoleAppDeploymentScript__9", line: 339 }; return __func(_, this, arguments, ScriptGenerator_prototype_generateDnxConsoleAppDeploymentScript__9, 0, __frame, function __$ScriptGenerator_prototype_generateDnxConsoleAppDeploymentScript__9() {
    if ((__this.scriptType != ScriptType.batch)) {
      return _(new Error("Only batch script files are supported for DNX Console Application")); } ;


    log.info("Generating deployment script for DNX Console Application");

    options = {
      dnxConsoleAppPath: __this.dnxConsoleAppPath };


    return __this.generateDnxConsoleAppScript("deploy.batch.dnx.consoleapp.template", options, __cb(_, __frame, 11, 2, _, true)); });};


ScriptGenerator.prototype.generateDotNetConsoleDeploymentScript = function ScriptGenerator_prototype_generateDotNetConsoleDeploymentScript__10(_) { var msbuildArguments, solutionDir, solutionArgs, options, __this = this; var __frame = { name: "ScriptGenerator_prototype_generateDotNetConsoleDeploymentScript__10", line: 353 }; return __func(_, this, arguments, ScriptGenerator_prototype_generateDotNetConsoleDeploymentScript__10, 0, __frame, function __$ScriptGenerator_prototype_generateDotNetConsoleDeploymentScript__10() {
    argNotNull(__this.projectPath, "projectPath");

    if (((__this.scriptType != ScriptType.batch) && (__this.scriptType != ScriptType.posh))) {
      return _(new Error("Only batch and posh script files are supported for .NET Web Application")); } ;


    if ((!__this.solutionPath && !__this.noSolution)) {
      return _(new Error("Missing solution file path (--solutionFile), to explicitly not require a solution use the flag --no-solution")); } ;


    log.info("Generating deployment script for .NET console application");



    if ((__this.scriptType == ScriptType.batch)) {
      msbuildArguments = (("\"%DEPLOYMENT_SOURCE%\\" + __this.projectPath) + "\" /nologo /verbosity:m /t:Build /p:Configuration=Release;OutputPath=\"%DEPLOYMENT_TEMP%\\app_data\\jobs\\continuous\\deployedJob\";UseSharedCompilation=false");

      if (__this.solutionPath) {
        solutionDir = path.dirname(__this.solutionPath);
        solutionArgs = ((" /p:SolutionDir=\"%DEPLOYMENT_SOURCE%\\" + solutionDir) + "\\\\\"");
        msbuildArguments += solutionArgs; } ;


      msbuildArguments += " %SCM_BUILD_ARGS%"; }
     else {
      msbuildArguments = (("\"$DEPLOYMENT_SOURCE\\" + __this.projectPath) + "\" /nologo /verbosity:m /t:Build /p:Configuration=Release`;OutputPath=\"$DEPLOYMENT_TEMP\\app_data\\jobs\\continuous\\deployedJob\"`;UseSharedCompilation=false");

      if (__this.solutionPath) {
        solutionDir = path.dirname(__this.solutionPath);
        solutionArgs = ((" /p:SolutionDir=\"$DEPLOYMENT_SOURCE\\" + solutionDir) + "\\\\\"");
        msbuildArguments += solutionArgs; } ;


      msbuildArguments += " $env:SCM_BUILD_ARGS"; } ;


    options = {
      msbuildArguments: msbuildArguments,
      msbuildArgumentsForInPlace: msbuildArguments };


    return __this.generateDotNetDeploymentScript("dotnetconsole.template", options, __cb(_, __frame, 42, 2, _, true)); });};


ScriptGenerator.prototype.generateWebSiteDeploymentScript = function ScriptGenerator_prototype_generateWebSiteDeploymentScript__11(_) { var msbuildArguments, __this = this; var __frame = { name: "ScriptGenerator_prototype_generateWebSiteDeploymentScript__11", line: 398 }; return __func(_, this, arguments, ScriptGenerator_prototype_generateWebSiteDeploymentScript__11, 0, __frame, function __$ScriptGenerator_prototype_generateWebSiteDeploymentScript__11() { return (function __$ScriptGenerator_prototype_generateWebSiteDeploymentScript__11(__then) {
      if (__this.solutionPath) {

        log.info("Generating deployment script for .NET Web Site");

        if (((__this.scriptType != ScriptType.batch) && (__this.scriptType != ScriptType.posh))) {
          return _(new Error("Only batch and posh script files are supported for .NET Web Site")); } ;




        if ((__this.scriptType == ScriptType.batch)) {
          msbuildArguments = (("\"%DEPLOYMENT_SOURCE%\\" + fixPathSeperatorToWindows(__this.solutionPath)) + "\" /verbosity:m /nologo %SCM_BUILD_ARGS%"); }
         else {
          msbuildArguments = (("\"$DEPLOYMENT_SOURCE\\" + fixPathSeperatorToWindows(__this.solutionPath)) + "\" /verbosity:m /nologo $env:SCM_BUILD_ARGS"); } ;


        return __this.generateDotNetDeploymentScript("aspnet.website.template", { msbuildArguments: msbuildArguments }, __cb(_, __frame, 17, 4, __then, true)); } else {


        log.info("Generating deployment script for Web Site");
        return __this.generateBasicDeploymentScript("basic.template", __cb(_, __frame, 21, 4, __then, true)); } ; })(_); });};



ScriptGenerator.prototype.generateBasicDeploymentScript = function ScriptGenerator_prototype_generateBasicDeploymentScript__12(templateFileName, _) { var lowerCaseScriptType, fixedSitePath, templateContent, __this = this; var __frame = { name: "ScriptGenerator_prototype_generateBasicDeploymentScript__12", line: 423 }; return __func(_, this, arguments, ScriptGenerator_prototype_generateBasicDeploymentScript__12, 1, __frame, function __$ScriptGenerator_prototype_generateBasicDeploymentScript__12() {
    argNotNull(templateFileName, "templateFileName");

    lowerCaseScriptType = __this.scriptType.toLowerCase();
    fixedSitePath = ((__this.scriptType === ScriptType.batch) ? fixPathSeperatorToWindows(__this.sitePath) : fixPathSeperatorToUnix(__this.sitePath));




    templateContent = getTemplatesContent([(("deploy." + lowerCaseScriptType) + ".prefix.template"),((("deploy." + lowerCaseScriptType) + ".") + templateFileName),(("deploy." + lowerCaseScriptType) + ".postfix.template"),]).replace(/{SitePath}/g, fixedSitePath);

    return __this.writeDeploymentFiles(templateContent, __cb(_, __frame, 11, 2, _, true)); });};


ScriptGenerator.prototype.generateDotNetDeploymentScript = function ScriptGenerator_prototype_generateDotNetDeploymentScript__13(templateFileName, options, _) { var lowerCaseScriptType, solutionDir, templateContent, __this = this; var __frame = { name: "ScriptGenerator_prototype_generateDotNetDeploymentScript__13", line: 437 }; return __func(_, this, arguments, ScriptGenerator_prototype_generateDotNetDeploymentScript__13, 2, __frame, function __$ScriptGenerator_prototype_generateDotNetDeploymentScript__13() {
    argNotNull(templateFileName, "templateFileName");


    lowerCaseScriptType = __this.scriptType.toLowerCase();
    solutionDir = (__this.solutionPath ? path.dirname(__this.solutionPath) : "");









    templateContent = getTemplatesContent([(("deploy." + lowerCaseScriptType) + ".prefix.template"),(("deploy." + lowerCaseScriptType) + ".aspnet.template"),((("deploy." + lowerCaseScriptType) + ".") + templateFileName),(("deploy." + lowerCaseScriptType) + ".postfix.template"),]).replace(/{MSBuildArguments}/g, (options.msbuildArguments || "")).replace(/{MSBuildArgumentsForInPlace}/g, (options.msbuildArgumentsForInPlace || "")).replace(/{SolutionPath}/g, (__this.solutionPath || "")).replace(/{SolutionDir}/g, solutionDir).replace(/{SitePath}/g, fixPathSeperatorToWindows(__this.sitePath));

    return __this.writeDeploymentFiles(templateContent, __cb(_, __frame, 17, 2, _, true)); });};


ScriptGenerator.prototype.generateAspNetCoreScript = function ScriptGenerator_prototype_generateAspNetCoreScript__14(templateFileName, options, _) { var lowerCaseScriptType, templateContent, __this = this; var __frame = { name: "ScriptGenerator_prototype_generateAspNetCoreScript__14", line: 457 }; return __func(_, this, arguments, ScriptGenerator_prototype_generateAspNetCoreScript__14, 2, __frame, function __$ScriptGenerator_prototype_generateAspNetCoreScript__14() {
    argNotNull(templateFileName, "templateFileName");

    lowerCaseScriptType = __this.scriptType.toLowerCase();









    templateContent = getTemplatesContent([(("deploy." + lowerCaseScriptType) + ".prefix.template"),(("deploy." + lowerCaseScriptType) + ".aspnet.template"),((("deploy." + lowerCaseScriptType) + ".") + templateFileName),(("deploy." + lowerCaseScriptType) + ".postfix.template"),]).replace(/{PROJECT}/g, fixPathSeperatorToWindows(options.aspNetCoreProject)).replace(/{SolutionPath}/g, options.solutionPath).replace(/{MSBuildArguments}/g, options.msbuildArguments).replace(/{Restore}/g, options.restore).replace(/{DotNetPublishArguments}/g, options.dotnetpublishArguments);

    return __this.writeDeploymentFiles(templateContent, __cb(_, __frame, 15, 2, _, true)); });};


function getTemplatesContent(fileNames) {
  var content = "";

  for (var i in fileNames) {
    content += getTemplateContent(fileNames[i]); };


  content = content.replace(/{Version}/g, package.version);

  return content;};


function fixPathSeperatorToWindows(pathStr) {
  return (pathStr ? pathStr.replace(/\//g, "\\") : pathStr);};


function fixPathSeperatorToUnix(pathStr) {
  return pathStr.replace(/\\/g, "/");};


function fixLineEndingsToUnix(contentStr) {
  return contentStr.replace(/\r\n/g, "\n");};


function fixLineEndingsToWindows(contentStr) {
  return contentStr.replace(/(?:\r\n|\n)/g, "\r\n");};


ScriptGenerator.prototype.writeDeploymentFiles = function ScriptGenerator_prototype_writeDeploymentFiles__15(templateContent, _) { var deployScriptFileName, deploymentCommand, deployScriptPath, deploymentFilePath, __this = this; var __frame = { name: "ScriptGenerator_prototype_writeDeploymentFiles__15", line: 503 }; return __func(_, this, arguments, ScriptGenerator_prototype_writeDeploymentFiles__15, 1, __frame, function __$ScriptGenerator_prototype_writeDeploymentFiles__15() {
    argNotNull(templateContent, "templateContent");



    if ((__this.scriptType == ScriptType.batch)) {
      deployScriptFileName = "deploy.cmd";
      deploymentCommand = deployScriptFileName;
      templateContent = fixLineEndingsToWindows(templateContent); } else {
      if ((__this.scriptType == ScriptType.posh)) {
        deployScriptFileName = "deploy.ps1";
        deploymentCommand = (("powershell -NoProfile -NoLogo -ExecutionPolicy Unrestricted -Command \"& \"$pwd\\" + deployScriptFileName) + "\" 2>&1 | echo\"");
        templateContent = fixLineEndingsToWindows(templateContent); }
       else {
        deployScriptFileName = "deploy.sh";
        deploymentCommand = ("bash " + deployScriptFileName);
        templateContent = fixLineEndingsToUnix(templateContent); } ; } ;


    deployScriptPath = path.join(__this.scriptOutputPath, deployScriptFileName);
    deploymentFilePath = path.join(__this.repositoryRoot, ".deployment");


    return writeContentToFile(deployScriptPath, templateContent, __cb(_, __frame, 23, 2, function __$ScriptGenerator_prototype_writeDeploymentFiles__15() { return (function __$ScriptGenerator_prototype_writeDeploymentFiles__15(__then) {

        if (!__this.noDotDeployment) {

          return writeContentToFile(deploymentFilePath, ("[config]\ncommand = " + deploymentCommand), __cb(_, __frame, 27, 4, __then, true)); } else { __then(); } ; })(function __$ScriptGenerator_prototype_writeDeploymentFiles__15() {


        log.info("Generated deployment script files"); _(); }); }, true)); });};


function getTemplateContent(templateFileName) {
  return fs.readFileSync(getTemplatePath(templateFileName), "utf8");};


function getTemplatePath(fileName) {
  return path.join(templatesDir, fileName);};


function writeContentToFile(path, content, _) { var __frame = { name: "writeContentToFile", line: 544 }; return __func(_, this, arguments, writeContentToFile, 2, __frame, function __$writeContentToFile() { return (function __$writeContentToFile(__then) {

      if (fs.existsSync(path)) {
        return confirm((("The file: \"" + path) + "\" already exists\nAre you sure you want to overwrite it (y/n): "), __cb(_, __frame, 3, 9, function ___(__0, __2) { var __1 = !__2; return (function __$writeContentToFile(__then) { if (__1) { return _(null); } else { __then(); } ; })(__then); }, true)); } else { __then(); } ; })(function __$writeContentToFile() {





      return fs.writeFile(path, content, __cb(_, __frame, 9, 2, _, true)); }); });};


function argNotNull(arg, argName) {
  if (((arg === null) || (arg === undefined))) {
    throw new Error((("The argument \"" + argName) + "\" is null")); };};



exports.ScriptGenerator = ScriptGenerator;