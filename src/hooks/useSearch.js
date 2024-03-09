import { useEffect, useState } from "react";

export default function useSearch(query, pageNumber) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const [pins, setPins] = useState([])

  const accessKey = process.env.REACT_APP_ACCESSKEY;

  useEffect(() => {
    setPins([])
  },[query])

}