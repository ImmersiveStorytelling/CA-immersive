using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Web;
using UnityEngine.UI;

public class MeasureStartStop : MonoBehaviour {
    private string APIKey;
    private string measurementID;
    private string results;

    public String MeasurementID
    {
        get
        {
            return measurementID;
        }
    }

    public String Results
    {
        get
        {
            return results;
        }
    }

    //In this function, a measurement should be started.
    //This method is called when the "play"-button is pressed
    void Awake()
    {
        //Debug.Log("Program start");

        APIKey = GetComponent<Text>().text;

        Dictionary<string, string> d = new Dictionary<string, string>();
        DateTime start = DateTime.Now;

        d.Add("APIKey", APIKey);
        d.Add("MeasurementID", "");
        d.Add("Start", start.ToString());
        d.Add("Stop", "");

        POST("http://jsonplaceholder.typicode.com/posts", d, startCallBack);
    }

    //In this function, a measurement should be stopped.
    //This method is called when the "play"-button is pressed again.
    void OnApplicationQuit()
    {
        //Debug.Log("Program stop");

        Dictionary<string, string> d = new Dictionary<string, string>();
        DateTime stop = DateTime.Now;

        d.Add("Stop", stop.ToString());

        PATCH("http://jsonplaceholder.typicode.com/posts/" + APIKey, d, stopCallback);
    }

    void startCallBack()
    {
        //Debug.Log("API call successfull");

        Measurement m = JsonUtility.FromJson<Measurement>(results);
        measurementID = m.MeasurementID;
    }

    void stopCallback() {
        //If API server responds to stop API call with all info, print info 
        Measurement m = JsonUtility.FromJson<Measurement>(results);
        Debug.Log("APIKey: " + m.APIKey);
        Debug.Log("MeasurementID: " + m.MeasurementID);
        Debug.Log("Start: " + m.Start);
        Debug.Log("Stop: " + m.Stop);

        //otherwise, do nothing
        ;
    }

    public WWW PATCH(string url, Dictionary<string, string> post, System.Action onComplete)
    {
        WWWForm form = new WWWForm();

        foreach (KeyValuePair<string, string> post_arg in post)
        {
            form.AddField(post_arg.Key, post_arg.Value);
        }

        WWW www = new WWW(url, form);

        StartCoroutine(WaitForRequest(www, onComplete));
        return www;
    }

    public WWW POST(string url, Dictionary<string, string> post, System.Action onComplete)
    {
        WWWForm form = new WWWForm();

        foreach (KeyValuePair<string, string> post_arg in post)
        {
            form.AddField(post_arg.Key, post_arg.Value);
        }

        WWW www = new WWW(url, form);

        StartCoroutine(WaitForRequest(www, onComplete));
        return www;
    }

    private IEnumerator WaitForRequest(WWW www, System.Action onComplete)
    {
        yield return www;
        // check for errors
        if (www.error == null)
        {
            results = www.text;
            onComplete();
        }
        else
        {
            Debug.Log(www.error);
        }
    }
}

[Serializable]
public class Measurement
{
    public string APIKey;
    public string MeasurementID;
    public string Start;
    public string Stop;
}
